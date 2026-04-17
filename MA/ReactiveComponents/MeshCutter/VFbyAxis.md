---
prev: false
next: false
---

# 顶点过滤器 - 按轴 / Vertex Filter - By Axis

![Vertex Filter - By Axis](/images/MA/ReactiveComponents/MeshCutter/VFbyAxis.png)

`Vertex Filter - By Axis` 是一个 Vertex Filter 组件，通过配合 [Mesh Cutter]()，可以让你根据部分网格是否位于平面的一侧来进行删除或隐藏。

## 何时应使用？

`Vertex Filter - By Axis` 的常见用例是在两侧使用相同的 UV 坐标下，允许你选择网格的一侧。例如：你有一个丝带网格，但两侧使用了相同的纹理坐标，则可以先使用 `Vertex Filter - By Mask` 选择整个丝带，然后使用 `Vertex Filter - By Axis` 将其限制为仅一侧。

## 何时不应使用？

在创建将用于分发的资产并使用 `Vertex Filter - By Axis` 进行过滤时需要注意。因为模型的形状以及所选的网格部分可能会随着最终用户所使用的 `Scale Adjuster` 而变化，因此建议仅将 `Vertex Filter - By Axis` 用于大致的选择，例如仅模型的左侧或右侧，然后使用其它过滤器（例如 By Mask）进行精确选择。

## 设置 Vertex Filter - By Axis

`Vertex Filter - By Axis` 必须附加到具有 `Mesh Cutter` 组件的游戏对象上。你可以通过点击 Mesh Cutter 组件上的 `Add Vertex Filter...` 按钮来添加过滤器，或者手动添加 `Vertex Filter - By Axis` 组件。

添加后，点击 `Edit` 按钮将显示一个可用来调整轴平面位置和方向的小工具。该平面是无限延展的，并将空间一分为二—— 位于平面一侧的顶点将被选中，而另一侧的顶点则不会被选中。白色箭头指向将被删除的一侧。

`Center` 和 `Axis` 字段是在 Renderer 的局部空间内计算的。