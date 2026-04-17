---
prev:
  text: '插件介绍'
  link: 'BlendShapeEditor/Description'
next: false
---

# 准备工作

单击下方链接来下载二次修改和分发的 *.unitypackage 文件：
https://hrenact.github.io/HrenactNET/Files/BlendShapeEditor.unitypackage

双击下载好的文件，或拖入 Unity 中 Project 窗口的 Assets 文件夹内，弹出导入窗口，单击`Import`来导入。

将鼠标移至 Unity 编辑栏的`Tools`选项，在浮现的窗口中单击`BlendShape Editor`选项，打开插件窗口。

选中你需要修复的模型的 Root，按下 Ctrl + D 创建副本，隐藏原始模型，在副本上进行模型的修改操作。

在开始使用此工具前，你应该先检查对应的 Skinned Mesh Renderer 组件物体上是否拥有`AAO Freeze BlendShapes`组件。如果拥有此组件，请先移除它，并在结束使用工具后重新添加。

![AAORemove](/images/BlendShapeEditor/FixMMD/AAORemove.png)

# 开始使用

将你拥有 MMD 形态键的物体拖入至`Skinned Mesh Renderer 槽`内，在`排序 & 重命名`选项卡内找到对应的会穿模的形态键，复制它的名称。

![photo1](/images/BlendShapeEditor/FixMMD/photo1.png)

转到`创建`选项卡，在 BlendShape 列表内选择对应的形态键，调整数值至刚好不会穿模，修改新 Blendshape 名称为`你正在修复的形态键名称_new`，单击`创建 BlendShape`并稍等片刻，即可完成新形态键的制作。

![photo2](/images/BlendShapeEditor/FixMMD/photo2.png)

如果你的脸型独特到调整单一的形态键无法解决，你可以单击 BlendShape 列表下方的 添加 + 来添加新的形态键并调整数值直到你满意为止。

![photo2_1](/images/BlendShapeEditor/FixMMD/photo2_1.png)

转到`排序 & 重命名`选项卡，翻到最底部，将新形态键移动至原始形态键上方，为原始形态键添加 `_backup` 后缀，并删除新形态键的`_new`后缀。

![photo3](/images/BlendShapeEditor/FixMMD/photo3.png)

![photo3_1](/images/BlendShapeEditor/FixMMD/photo3_1.png)

此选项卡不支持`撤回 Ctrl + Z`操作，如果进行了误操作，可以单击页面底部的`重置 Blendshape 修改`按钮来重置形态键顺序和名称。

修改完成后，单击`应用 Blendshape 修改`来保存新形态键顺序和名称，转到原始物体的`Inspector`并将原始形态键的值调为 0 ，此时我们就完成此 MMD 形态键的穿模问题，以此类推，哪些会穿模就修哪些。

![photo4](/images/BlendShapeEditor/FixMMD/photo4.png)