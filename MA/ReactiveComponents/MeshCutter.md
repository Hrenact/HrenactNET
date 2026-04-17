---
prev: false
next: false
---

# 网格切割器 / Mesh Cutter

![Mesh Cutter](/images/MA/ReactiveComponents/MeshCutter.png)

Mesh Cutter 允许你删除或隐藏一部分网格，这个部分由一个或多个顶点 Vertex Filter 指定。

Mesh Cutter 是一种反应式组件。有关 [反应式组件]() 的基础规则和行为，请参阅相关页面。

## 何时应使用？

Mesh Cutter 有多种应用场景，包括：

- 移除穿透外层衣物的底层模型部分
- 出于美观目的删除模型的部分区域（例如，缩短丝带的一侧）
- 删除模型中不必要的部分以减少多边形数量

## 何时不应使用？

如果你因为一个网格被另一个网格完全覆盖而去关闭它，请考虑改用 [Object Toggle](ObjectToggle)。这更高效，因为即使网格完全被隐藏，Mesh Cutter 仍需要处理整个网格。

## 设置 Mesh Cutter

要使用 Mesh Cutter，你需要添加一个 Mesh Cutter 组件和至少一个 Vertex Filter 组件。首先，添加一个 Mesh Cutter 组件，并修改 `Target Renderer` 字段为你想要修改的对象。Mesh Cutter 会在激活时删除或隐藏该对象的顶点（根据反应式组件的规则）—— 如果你需要在非激活状态时删除，请勾选 `Inverse Condition`。

接着，在同一对象上添加一个或多个 Vertex Filter 组件。你可以通过点击 Mesh Cutter 组件上的 `Add Vertex Filter...` 按钮来添加过滤器，或者手动添加 Vertex Filter 组件。

### 支持的 Vertex Filter

- [By Axis](MeshCutter/VFbyAxis) - 根据网格是否位于某个平面的一侧来选择网格部分。
- [By Bone](MeshCutter/VFbyBone) - 根据特定骨骼对顶点的权重来选择网格部分。
- [By Mask](MeshCutter/VFbyMask) - 使用黑白蒙版纹理选择网格部分。
- [By Blendshape](MeshCutter/VFbyBlendshape) - 根据指定的 Blendshape 激活时顶点的移动情况来选择网格部分。

## 使用多个 Vertex Filter

当你同时使用多个 Vertex Filter 时，你可以将它们作为多个过滤器的并集，或是多个过滤器的交集（也就是只保留匹配所有过滤器的顶点）。这允许你创建单个过滤器无法完成的复杂选择。例如，如果一个网格在左右两侧重复使用相同的 UV 坐标，你可以先用 `By Mask` 选择网格的一部分，然后使用 `By Axis` 将其限制在某一侧。

这里有一个使用多个过滤器缩短带状网格一侧的示例：

![Mesh Cutter Multiple Filters](/images/MA/ReactiveComponents/MeshCutterMultipleFilters.png)

Anon 的丝带左右两侧使用相同的纹理坐标，因此我们无法仅使用单一的 `By Mask` 来选择左侧。相反，我们先使用一个 `By Mask` 选择整个丝带，然后用一个 `By Axis` 选择左侧，最后再用另一个 `By Axis` 选择我们希望缩短的距离。

## 效率说明

如果 Mesh Cutter 始终处于激活状态，那么 Modular Avatar 会完全删除所选的多边形。这是为了减少多边形数量，以保持在性能评级限制以内。

如果 Mesh Cutter 有时处于非激活状态，则 Modular Avatar 会隐藏选中的多边形。在某些情况下，这会需要生成约束，从而导致性能评级的降低。