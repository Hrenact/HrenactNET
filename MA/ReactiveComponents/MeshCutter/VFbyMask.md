---
prev: false
next: false
---

# 顶点过滤器 - 按遮罩 / Vertex Filter - By Mask

![Vertex Filter - By Mask](/images/MA/ReactiveComponents/MeshCutter/VFbyMask.png)

`Vertex Filter - By Mask` 是一个 Vertex Filter 组件，通过配合 [Mesh Cutter]()，可以让你根据遮罩纹理来选择删除或隐藏部分网格。

## 设置 Vertex Filter - By Mask

`Vertex Filter - By Mask` 必须附加到具有 `Mesh Cutter` 组件的游戏对象上。你可以通过点击 Mesh Cutter 组件上的 `Add Vertex Filter...` 按钮来添加过滤器，或者手动添加 `Vertex Filter - By Mask` 组件。

添加后，确保 Mesh Cutter 组件上的 `Target Renderer` 字段为你想要修改的对象。然后，选择你想要删除多边形的`Material Slot`。

::: tip

单个 `Vertex Filter - By Mask` 组件只能从一个材质槽中选择多边形。如果你想删除多个材质槽中的多边形，可以创建多个游戏对象，每个对象都使用单独的 Mesh Cutter 和 Vertex Filter。

:::

一但你选好了材质槽，就可以设置遮罩纹理。你可以使用事先编辑好的纹理，或在安装了编辑器拓展插件 [Mask Texture Editor](https://github.com/nekobako/MaskTextureEditor) 的情况下点击 `Edit` 按钮来在 Unity 中创建或编辑遮罩纹理。

最后，`Delete Mode` 字段可以用来选择删除遮罩中的白色或黑色区域。