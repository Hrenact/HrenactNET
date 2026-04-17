---
prev: false
next: false
---

# 合并动画控制器 / Merge Animator

![Merge Animator](/images/MA/MergeAnimator.png)

`Merge Animator` 组件将把提供的 Animator 添加到它所附加的模型的指定层。这可以用来制作复杂的 AV3 噱头，只需拖放到模型上即可安装。

## 何时应使用？

当你想将动画作为你噱头的一部分播放时，请使用 `Merge Animator` 组件。

## 何时不应使用？

`Merge Animator` 组件会添加到现有的 Animator Layer，但不会替换它们。如果你希望最终用户完全替换某个 Animator Layer，最好让他们通过传统方式在 Avatar Descriptor 中进行替换。

## 设置 Merge Animator

将 `Merge Animator` 组件添加到预制件中的对象，并在 `Animator to merge` 字段中添加 Animator。将 `Layer Type` 字段设置为应添加此动画的模型动画层（例如：FX）。

### 录制动画

默认情况下，Animator 中的路径被解释为相对于 `Merge Animator` 组件的路径。这使得录制新动画变得容易，前提是你正在为 `Merge Animator` 组件下的对象制作动画。

只需将一个 `Animator` 组件附加到你的游戏对象上，就可以通过 Animation 面板来录制动画：

![Recording animations](/images/MA/MergeAnimatorRA.png)

为了方便开发，你可以勾选 `Delete attached animator` 选项，以在构建时移除 `Animator` 组件。

### 人形骨骼动画

移动人形骨骼的动画会忽略相对路径逻辑，并且总是作用于整个角色。因此，大多数人形动画（例如 AFK 动画）是可以直接使用的。

### 路径模式 / Path mode

`Path mode` 选项控制动画路径的解释方式。在 `Relative` 模式下，所有路径都是相对于一个特定对象的，通常是附加了 `Merge Animator` 组件的对象。这允许你创建在模型层级中移动后仍然有效的噱头，并通过使用 Unity `Animator` 组件（如上所述）更容易的录制动画。你可以通过设置 `Relative Path Root` 字段来控制在动画中使用哪个对象作为路径的 Root。

如果你想要为已经附加到模型的对象（不在你的对象下）制作动画，请将 `Path mode` 设置为`Absolute`。这将使动画器使用绝对路径，不会尝试以 `Merge Animator` 组件为相对路径的参考。这意味着你需要使用角色的 Root 动画器来录制你的动画。

### 图层优先级 / Layer Priority

`Layer Priority` 控制着 `Merge Animator` 组件的应用顺序。它们将在最终动画器中按优先级递增的顺序排列（即，数字较低的位于 Animator 列表前面，而数字较高的则会盖过它们）。具有相同优先级的 `Merge Animator` 将按它们在层次结构中的顺序排列。任何已有的 Animator 优先级都被视为零，位于所有优先级为零的 `Merge Animator` 前面。

### 合并模式 / Merge Mode

默认情况下，`Merge Animator` 会将 Animator 添加到指定的层。如果你想替换该层，请将 `Merge Mode` 设置为 `Replace Existing Animator`。这将用你提供的 Animator 替换 VRChat Descriptor 上配置的任何 Animator。

被替换的 Animator 将保持你指定的优先级，但它将在该优先级级别的其他 `Merge Animator` 之前应用。

将多个 `Merge Animator` 设置为相同的 `Layer Type` 和替换模式将导致错误。

### 写入默认值 / Write Defaults

默认情况下，Animator 的 Write Defaults 不会被更改。如果你希望确保 Animator 状态的 WD 设置始终与模型的 Animator 匹配，请勾选 `Match Avatar Write Defaults`。此操作将检测模型是否在使用 Write Defaults 时始终保持开启或关闭状态，如果是，则会调整你的 Animator 以匹配。如果模型使用的 Write Defaults 不一致，你的 Animator 将保持不变。

## 限制

### VRCAnimatorLayerControl

目前，`Merge Animator` 仅支持引用同一 Animator 内图层的 VRCAnimatorLayerControl 状态行为。如果您打算使用此功能，请确保 `Playable` 字段与 `Merge Animator` 组件上设置的 `Layer` 匹配，并将 `Layer` 字段设置为 Animator 中图层的索引。