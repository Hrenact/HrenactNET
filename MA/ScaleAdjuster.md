---
prev: false
next: false
---

# 缩放调整器 / Scale Adjuster

![Scale Adjuster](/images/MA/ScaleAdjuster.png)

`Scale Adjuster` 组件允许你调整特定骨骼的 X/Y/Z 轴比例，而不会影响已旋转的子骨骼。

## 何时应使用？

此组件主要用于为最初未为你的模型设计的服装进行调整。您可以使用它来调整特定骨骼的尺寸，而不会破坏子骨骼。

## 何时不应使用？

当调整骨骼的整体比例（X/Y/Z等比例调整）时，通常最好使用常规的 Unity 缩放工具。

## 设置 Scale Adjuster

只需将 `Scale Adjuster` 组件添加到相关骨骼即可。现在，当你选择缩放工具时，修改只会影响这个骨骼。

你可以勾选或取消勾选 `Adjust child positions` 复选框，以在父骨骼缩放时调整子骨骼的相对位置。当你想调整骨骼的缩放，但又不想移动子骨骼时，这非常有用。请注意，这只会调整子骨骼的位置，而不会调整它们的缩放。

`Scale Adjuster` 支持通过将缩放组件添加到所有相关骨骼，然后在调整它们的缩放前选择多个骨骼来同时调整多个骨骼的缩放。然而，如果这些骨骼已经旋转过，缩放调整可能不会完全准确，结果可能与预期有所不同。

::: warning

![Warning](/images/MA/ScaleAdjusterW.png)
`Scale Adjuster` 仅控制 Unity 缩放工具。组合移动/旋转/缩放工具仍然会影响所有子对象。

:::