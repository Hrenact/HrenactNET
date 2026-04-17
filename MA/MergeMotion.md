---
prev: false
next: false
---

# 合并运动（混合树） / Merge Motion (Blend Tree)

![Merge Motion](/images/MA/MergeMotion.png)

`Merge Motion` 组件允许你将多个 Blend Tree 合并到单个 FX 层中。这是一个高级组件，通过将多个小噱头合并到单个层中，可以构建开销更低的 Animation。它还可以用来设置一个始终运行的动画。

::: info

在 1.12 之前，这个组件被称为 `Merge Blend Tree`。在1.12中，它被扩展以支持合并动画剪辑；因此名称更改为 `Merge Motion`。使用 1.11 或更早版本的 `Merge Blend Tree` 创建的现有资源将自动升级为使用新的 `Merge Motion` 组件。

为了 API 兼容性目的，该组件在内部仍然被称为 `ModularAvatarMergeBlendTree`。

:::

## 何时应使用？

当你有一个希望在模型上始终处于激活状态的动作（Animation Clip 或 Blend Tree）时，你应该使用 `Merge Motion`。

## 何时不应使用？

如果你需要禁用/启用 Motion，或者控制 Motion Time，则不应该使用 `Merge Motion`。

## 合并 Blend Tree

首先，创建一个 Blend Tree 资产。你可以通过右键点击 project 窗口，然后选择 `Create -> BlendTree` 来完成此操作。

根据需要配置你的 Blend Tree，然后添加一个 `Merge Motion` 组件，并在 `Motion` 字段中指定 Blend Tree。

你可以像 `Merge Animator` 一样配置 `Path Mode` 和 `Relative Path Root`；有关更多详细信息，请参阅 [`Merge Animator`](MergeAnimator) 文档。

## 合并 Animation

只需将 Animation  放入 `Motion (or Blend Tree) to merge` 字段中。Animation 就会持续播放。

## Motion 是如何合并的

Modular Avatar 将在 FX 控制器的顶部创建一个新图层。该图层将包含一个启用 Write Defaults on 的 state，并包含一个 Direct Blend Tree。每个合并的 Motion 都将附加到这个直接混合树，并且其 Parameter 始终设置为一。