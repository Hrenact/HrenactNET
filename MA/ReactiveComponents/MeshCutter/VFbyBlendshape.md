---
prev: false
next: false
---

# 顶点过滤器 - 按形态键 / Vertex Filter - By Blendshape

![Vertex Filter - By Blendshape](/images/MA/ReactiveComponents/MeshCutter/VFbyBlendshape.png)

`Vertex Filter - By Blendshape` 是一个 Vertex Filter 组件，通过配合 [Mesh Cutter]()，可以让你根据指定的 Blendshape 激活时部分网格的顶点移动情况来进行删除或隐藏。

## 何时应使用？

当你想去除某些 Blendshape 激活时会穿透衣服或配件的部分网格时，`Vertex Filter - By Blendshape` 会很有用。常见的使用场景有：

- 去除当面部表情改变脸型时，身体网格中会透过衣服显现的部分
- 隐藏激活头部 Blendshape 时会穿透帽子的部分头发
- 删除会干扰基于 Blendshape 动画的部分配件

## 设置 Vertex Filter - By Blendshape

`Vertex Filter - By Blendshape` 必须附加到具有 `Mesh Cutter` 组件的游戏对象上。你可以通过点击 Mesh Cutter 组件上的 `Add Vertex Filter...` 按钮来添加过滤器，或者手动添加 `Vertex Filter - By Blendshape` 组件。

添加后，确保 Mesh Cutter 组件上的 `Target Renderer` 字段为你想要修改的对象。

接下来，添加你想用于过滤的 Blendshape。点击 `+` 按钮来选择相关网格上的 Blendshape。如果选择了多个 Blendshape，所有 Blendshape 激活时会移动的顶点都将被选中。

最后，调整 `Threshold` 来控制灵敏度。当 Blendshape 激活时，移动超过此距离（局部空间中的顶点）将被过滤掉。默认值 0.001 对大多数情况都适用，但根据你的具体网格和 Blendshape，你可能需要进行调整。

::: tip

使用较小的 `Threshold` 可以更严格的选择要过滤的顶点，使用较大的阈值则可以更粗略的进行过滤。

:::