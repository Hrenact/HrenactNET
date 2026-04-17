---
prev:
  text: '分类'
  link: 'UnitySnippet/Classis'
next:
  text: 'Runtime Behaviour'
  link: 'UnitySnippet/RuntimeBehaviour'
---



# Editor Tools

只影响 Unity 编辑器，不进运行时。

请将这些脚本放在 `Assets/Editor` 文件夹内。

## Canvas Order Setter

批量设置父节点下所有 `Render Mode` 为 `World Space` 的 `Canvas` 里 `Order in Layer` 数值。

::: details 查看或复制代码
```CS
using UnityEngine;
using UnityEditor;

public class CanvasOrderSetter : EditorWindow
{
    private Transform root;
    private int orderInLayer = 0;
    private bool includeInactive = true;
    private bool onlyOverrideSorting = false;

    [MenuItem("Tools/Canvas Order Setter")]
    public static void ShowWindow()
    {
        GetWindow<CanvasOrderSetter>("Canvas Order Setter");
    }

    private void OnGUI()
    {
        GUILayout.Label("批量设置 Canvas Order in Layer", EditorStyles.boldLabel);

        root = (Transform)EditorGUILayout.ObjectField("Root 物体", root, typeof(Transform), true);
        orderInLayer = EditorGUILayout.IntField("Order in Layer", orderInLayer);

        includeInactive = EditorGUILayout.Toggle("包含未激活物体", includeInactive);
        onlyOverrideSorting = EditorGUILayout.Toggle("仅 overrideSorting", onlyOverrideSorting);

        GUILayout.Space(10);

        if (GUILayout.Button("执行"))
        {
            if (root == null)
            {
                Debug.LogWarning("请先指定 Root 物体！");
                return;
            }

            SetCanvasOrder(root);
        }
    }

    private void SetCanvasOrder(Transform root)
    {
        int count = 0;

        // 获取所有子物体（包括自身）
        Transform[] allChildren = root.GetComponentsInChildren<Transform>(includeInactive);

        foreach (var t in allChildren)
        {
            Canvas canvas = t.GetComponent<Canvas>();
            if (canvas == null) continue;

            if (onlyOverrideSorting && !canvas.overrideSorting)
                continue;

            Undo.RecordObject(canvas, "Set Canvas Order");

            canvas.sortingOrder = orderInLayer;
            count++;
        }

        Debug.Log($"已设置 {count} 个 Canvas 的 Order in Layer = {orderInLayer}");
    }
}
```
:::

## Random Rotation Tool

批量随机旋转父节点下所有 `Game Object`，可调整旋转最大值与最小值，以及要旋转的轴。

::: details 查看或复制代码
```CS
using UnityEngine;
using UnityEditor;

public class RandomRotationTool : EditorWindow
{
    private GameObject root;

    private bool includeInactive = true;
    private bool includeRoot = true;

    private bool randomX = false;
    private bool randomY = true;
    private bool randomZ = false;

    private Vector2 rangeX = new Vector2(0, 360);
    private Vector2 rangeY = new Vector2(0, 360);
    private Vector2 rangeZ = new Vector2(0, 360);

    [MenuItem("Tools/Random Rotation Tool")]
    public static void ShowWindow()
    {
        GetWindow<RandomRotationTool>("随机旋转工具");
    }

    private void OnGUI()
    {
        GUILayout.Label("目标物体", EditorStyles.boldLabel);
        root = (GameObject)EditorGUILayout.ObjectField("Root", root, typeof(GameObject), true);

        GUILayout.Space(10);

        GUILayout.Label("选项", EditorStyles.boldLabel);
        includeInactive = EditorGUILayout.Toggle("包含未激活物体", includeInactive);
        includeRoot = EditorGUILayout.Toggle("包含Root本身", includeRoot);

        GUILayout.Space(10);

        GUILayout.Label("旋转轴设置", EditorStyles.boldLabel);

        DrawAxis("X轴", ref randomX, ref rangeX);
        DrawAxis("Y轴", ref randomY, ref rangeY);
        DrawAxis("Z轴", ref randomZ, ref rangeZ);

        GUILayout.Space(20);

        if (GUILayout.Button("执行随机旋转"))
        {
            ApplyRandomRotation();
        }
    }

    private void DrawAxis(string label, ref bool enabled, ref Vector2 range)
    {
        EditorGUILayout.BeginVertical("box");
        enabled = EditorGUILayout.Toggle(label, enabled);

        if (enabled)
        {
            range.x = EditorGUILayout.FloatField("最小值", range.x);
            range.y = EditorGUILayout.FloatField("最大值", range.y);
        }

        EditorGUILayout.EndVertical();
    }

    private void ApplyRandomRotation()
    {
        if (root == null)
        {
            Debug.LogWarning("未指定 Root 物体！");
            return;
        }

        // 一次性获取（性能关键）
        Transform[] transforms = root.GetComponentsInChildren<Transform>(includeInactive);

        int count = transforms.Length;

        if (!includeRoot && count > 0)
        {
            count -= 1; // 跳过 root
        }

        // 批量 Undo（性能关键）
        Undo.RecordObjects(transforms, "Random Rotation");

        for (int i = 0; i < transforms.Length; i++)
        {
            Transform t = transforms[i];

            if (!includeRoot && t == root.transform)
                continue;

            float x = randomX ? Random.Range(rangeX.x, rangeX.y) : t.localEulerAngles.x;
            float y = randomY ? Random.Range(rangeY.x, rangeY.y) : t.localEulerAngles.y;
            float z = randomZ ? Random.Range(rangeZ.x, rangeZ.y) : t.localEulerAngles.z;

            t.localRotation = Quaternion.Euler(x, y, z);
        }

        Debug.Log($"随机旋转完成，共处理 {count} 个物体");
    }
}
```
:::

## Replace Text With TMP

批量替换选中物体下所有物体里的 `Text` 组件为 `TMP UGUI` 组件，需先设置 `TMP Font` 资产。

::: details 查看或复制代码
```CS
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ReplaceTextWithTMP : EditorWindow
{
    private TMP_FontAsset targetFontAsset;

    [MenuItem("Tools/Replace Text With TMP (Selected)")]
    static void Init()
    {
        ReplaceTextWithTMP window = (ReplaceTextWithTMP)GetWindow(typeof(ReplaceTextWithTMP));
        window.titleContent = new GUIContent("Replace Text With TMP");
        window.Show();
    }

    private void OnGUI()
    {
        GUILayout.Label("替换选中物体及子物体的所有 Text 为 TMP Text", EditorStyles.boldLabel);
        targetFontAsset = (TMP_FontAsset)EditorGUILayout.ObjectField("TMP Font Asset", targetFontAsset, typeof(TMP_FontAsset), false);

        if (GUILayout.Button("开始替换"))
        {
            if (targetFontAsset == null)
            {
                EditorUtility.DisplayDialog("提示", "请先指定一个 TMP Font Asset！", "确定");
                return;
            }

            ReplaceSelected();
        }
    }

    private void ReplaceSelected()
    {
        GameObject[] selectedObjects = Selection.gameObjects;
        int replacedCount = 0;

        foreach (GameObject obj in selectedObjects)
        {
            Text[] texts = obj.GetComponentsInChildren<Text>(true);
            foreach (Text oldText in texts)
            {
                Undo.RegisterFullObjectHierarchyUndo(oldText.gameObject, "Replace Text with TMP");

                // 复制旧属性
                GameObject go = oldText.gameObject;
                string content = oldText.text;
                FontStyle style = oldText.fontStyle;
                int fontSize = Mathf.RoundToInt(oldText.fontSize);
                Color color = oldText.color;
                TextAnchor alignment = oldText.alignment;
                bool raycastTarget = oldText.raycastTarget;
                bool richText = oldText.supportRichText;

                // 删除旧的 Text 组件
                Object.DestroyImmediate(oldText, true);

                // 添加新的 TMP 组件
                TextMeshProUGUI tmp = go.AddComponent<TextMeshProUGUI>();
                tmp.text = content;
                tmp.font = targetFontAsset;
                tmp.fontSize = fontSize;
                tmp.color = color;
                tmp.raycastTarget = raycastTarget;
                tmp.richText = richText;

                // 对齐方式映射
                tmp.alignment = ConvertAlignment(alignment, style);

                replacedCount++;
            }
        }

        EditorUtility.DisplayDialog("完成", $"成功替换了 {replacedCount} 个 Text 为 TMP Text！", "好耶");
    }

    private static TextAlignmentOptions ConvertAlignment(TextAnchor anchor, FontStyle style)
    {
        switch (anchor)
        {
            case TextAnchor.UpperLeft: return TextAlignmentOptions.TopLeft;
            case TextAnchor.UpperCenter: return TextAlignmentOptions.Top;
            case TextAnchor.UpperRight: return TextAlignmentOptions.TopRight;
            case TextAnchor.MiddleLeft: return TextAlignmentOptions.Left;
            case TextAnchor.MiddleCenter: return TextAlignmentOptions.Center;
            case TextAnchor.MiddleRight: return TextAlignmentOptions.Right;
            case TextAnchor.LowerLeft: return TextAlignmentOptions.BottomLeft;
            case TextAnchor.LowerCenter: return TextAlignmentOptions.Bottom;
            case TextAnchor.LowerRight: return TextAlignmentOptions.BottomRight;
            default: return TextAlignmentOptions.Center;
        }
    }
}
```
:::

## TMP Font Replacer Editor

批量替换选中物体下所有物体里 `TMP UGUI` 组件里的 `Font Asset` 为指定的 `TMP Font` 资产。

::: details 查看或复制代码
```CS
using UnityEngine;
using UnityEditor;
using TMPro;

public class TMPFontReplacerEditor : EditorWindow
{
    private TMP_FontAsset newFont;

    [MenuItem("Tools/TMP Font Replacer")]
    public static void ShowWindow()
    {
        GetWindow<TMPFontReplacerEditor>("TMP Font Replacer");
    }

    private void OnGUI()
    {
        GUILayout.Label("TMP Font 替换工具", EditorStyles.boldLabel);

        newFont = (TMP_FontAsset)EditorGUILayout.ObjectField("新的 Font Asset", newFont, typeof(TMP_FontAsset), false);

        if (GUILayout.Button("替换选中物体的所有 TMP_Text 字体"))
        {
            ReplaceFonts();
        }
    }

    private void ReplaceFonts()
    {
        if (newFont == null)
        {
            EditorUtility.DisplayDialog("警告", "请先指定一个新的 TMP_FontAsset！", "好的");
            return;
        }

        GameObject[] selectedObjects = Selection.gameObjects;
        int count = 0;

        foreach (GameObject go in selectedObjects)
        {
            TMP_Text[] texts = go.GetComponentsInChildren<TMP_Text>(true);
            foreach (var tmp in texts)
            {
                Undo.RecordObject(tmp, "Replace TMP Font"); // 支持撤销
                tmp.font = newFont;
                EditorUtility.SetDirty(tmp); // 标记已修改
                count++;
            }
        }

        EditorUtility.DisplayDialog("完成", $"已替换 {count} 个 TMP_Text 组件的字体为 {newFont.name}", "好的");
    }
}
```
:::