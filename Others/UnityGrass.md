---
prev: false
next: false
---



# Unity 草地铺设

::: danger
# 该文章未完工
# 该文章未完工
# 该文章未完工
# 该文章未完工
# 该文章未完工
# 该文章未完工
:::

目标：做出如下图所示的草地效果。

![效果示例](/images/UnityGrass/Simple.png)

## 教程部分

- 在 Unity Asste Store 获取插件 [Prefab Painter 2](https://assetstore.unity.com/packages/tools/painting/prefab-painter-2-61331) 。

![Prefab Painter 2](/images/UnityGrass/PrefabPainter2.png)

- 打开 Unity 窗口，选择顶栏的 `Window` > `Package Manager` 选项。
- 单击 `Package Manager` 窗口左上角的 `Packages: Unity Registry` 选项，在下拉栏中选择 `My Asstes`。
- 在窗口左侧栏目选中 `Prefab Painter 2`，随后点击右上角的 `Download` 选项。
- 下载完成后，点击右上角的 `Import` 选项来打开导入窗口，在弹出的窗口中点击右下角的 `Import` 选项即可导入插件。

![Import Unity Package](/images/UnityGrass/ImportUnityPackage.png)

- 下载想要作为草地铺设的模型，以 Poly Haven [Grass Medium 01](https://polyhaven.com/zh/a/grass_medium_01) 为例。
- 在下载前，你可以在右上角的 `下载` 按钮左侧更改贴图分辨率，模型格式。这里以 `2K` 分辨率和 `FBX` 格式作为下载选项。

![Grass Medium 01](/images/UnityGrass/GrassMedium01.png)

- 下载完成后，解压缩 `grass_medium_01_2k.fbx.zip` 文件，得到 `grass_medium_01_2k.fbx` 文件夹。
- 将 `grass_medium_01_2k.fbx` 文件夹拖入至 Unity `Project` 栏的 `Assets` 文件夹内。
- 此时会弹出一个 `NormalMap setting` 窗口，点击 `Fix now` 按钮即可正确设置法线贴图应有的格式。


![导入素材](/images/UnityGrass/ImportGrass.png)

- 前往 `Assets/grass_medium_01_2k.fbx` 文件夹，选中 `grass_medium_01_2k.fbx` 并将其拖入至 `Hierarchy` 栏的层级中。
- 双击 `grass_medium_01_2k` 层级，使 `Scene` 视角定位至刚刚拖入的 `grass_medium_01_2k` 上。

![添加素材](/images/UnityGrass/PlaceFBX.png)

- 为草模型创建材质球。以 [Mochies Unity Shaders](https://github.com/MochiesCode/Mochies-Unity-Shaders) 为例。
- 前往 `Releases` 界面下载最新的 `Mochies.Unity.Shaders.v版本号.Free.unitypackage` 并导入至 Unity。

![Mochies Unity Shaders](/images/UnityGrass/MUSGithub.png)

::: details 控制台报错了？
- 在非 VRChat SDK 的 Unity 工程中，通常不会默认引入程序集 `System.Runtime.CompilerServices.Unsafe`。
- 因此 `Assets/Mochie/Unity/Editor/Common/MGUI.cs` 中调用 `Unsafe.As<T>` 时，会出现编译错误：</br>`CS0122: 'Unsafe' is inaccessible due to its protection level`
- 该问题本质是：**缺少对 `System.Runtime.CompilerServices.Unsafe` 程序集的引用，而非代码逻辑错误。**

##### **补充说明:**

- `Unsafe.As<T>` 在 Mochie Shader Editor 中用于实现 `enum ↔ int` 的零开销转换。
- 但在 Unity 编辑器环境中，该优化通常没有实际必要，因此可以替换为 Unity 原生实现以提升兼容性。

#### **方案一 修改脚本**

适用于：后期不再升级 Mochies Unity Shaders、不想额外导入 `*.dll` 文件

```CS line-numbers=1025 {1}
public static void EnumDropdown<T>(MaterialProperty prop, GUIContent label) where T : Enum
    {
        int intValue = prop.intValue;
        
        // a generic enum parameter can't be directly casted to an int,
        // so this is the most performant option (rather than casting
        // to object first, which would allocate some garbage)
        
        T enumValue = Unsafe.As<int, T>(ref intValue); // [!code --]
        T enumValue = (T)Enum.ToObject(typeof(T), intValue); // [!code ++]

        enumValue = EnumDropdown(enumValue, label);

        prop.intValue = Unsafe.As<T, int>(ref enumValue); // [!code --]
        prop.intValue = Convert.ToInt32(enumValue); // [!code ++]
    }
```

#### **方案二 导入依赖**

适用于：后期可能会升级 Mochies Unity Shaders、不想修改他人代码

- 前往 NuGet 官网下载 [System.Runtime.CompilerServices.Unsafe](https://www.nuget.org/packages/System.Runtime.CompilerServices.Unsafe) 包。
- 在网页右侧栏目的 `About` 下，点击 `Download package` 选项即可开始下载 `system.runtime.compilerservices.unsafe.版本号.nupkg`。
- 下载完成后，解压缩 `*.nupkg` 包为文件夹，随后前往文件夹的 `lib` > `netstandard2.0` 目录。
- 将目录内的 `System.Runtime.CompilerServices.Unsafe.dll` 文件拖入至 Unity `Project` 栏的 `Assets` 文件夹内。
- 等待 Unity 编辑完成，报错消失。若编辑器内仍然存在报错，重启即可。

:::

- 前往 Unity `Project` 栏的 `Assets/grass_medium_01_2k.fbx` 文件夹，右键空白区域。
- 在右键菜单栏中选择 `Create` > `Material` 来创建新材质球，并切换 `Shader` 为 `Mochie/Standard`。
- 参考例图设置材质球，并作为草模型的材质球。

::: details 文字版指引

名称 | 值/贴图
:--: | :--:
Blending Mode | Cutout
Alpha Source | Alpha Mask
Base Color | grass_medium_01_diff_2k.jpg
Alpha Mask | grass_medium_01_alpha_2k.png
Normal Map | grass_medium_01_nor_gl_2k.exr
Roughness | grass_medium_01_rough_2k.exr
Vertex Manipulation | √
Wind | √
Culling | Off

:::

| ![材质球 1](/images/UnityGrass/GrassMaterial1.png) | ![材质球 2](/images/UnityGrass/GrassMaterial2.png) |
| :--: | :--: |

- 选中 `grass_medium_01_2k` 层级，随后右键，选择 `Prefab` > `Unpack Completely` 选项。

![完全解压缩](/images/UnityGrass/UnpackCompletely.png)

- 将 `grass_medium_01_2k` 的 `Position`、`Rotation` 和 `Scale` 的值分别设为 `0`、`0`、`1`。展开层级，将所有子物体的 `Position` 值设为 `0`。

![设置 Transform](/images/UnityGrass/SetTransform.png)

- 在 `Assets` > `grass_medium_01_2k.fbx` 目录下新建 `prefabs` 文件夹，随后进入文件夹。
- 选中 `grass_medium_01_2k` 层级下的所有子物体，拖入至 `prefabs` 文件夹来创建 `Prefab` 预制件。

![创建预制件](/images/UnityGrass/CreatePrefab.png)

- 转到 Unity 窗口，选择顶栏的 `Window` > `nTools` > `Prefab Painter` 选项来打开 `Prefab Painter` 插件窗口

![打开插件窗口](/images/UnityGrass/PrefabPainter.png)