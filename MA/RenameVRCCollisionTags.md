---
prev: false
next: false
---

# MA 重命名 VRChat 碰撞标签 / MA Rename VRChat Collision Tags

![Rename VRChat Collision Tags](/images/MA/RenameVRCCollisionTags.png)

`MA Rename VRChat Collision Tags` 组件允许你重命名 VRChat Collision 系统使用的碰撞标签，以避免与其它组件或机制发生名称冲突。

## 何时应使用？

当你有不希望干扰其他用户模型的 Collision 时，或者当你想避免与你自己模型上的其它组件或装置发生名称冲突时，你应该使用  `MA Rename VRChat Collision Tags` 组件。你还可以使用它通过使用相同的标签名称来配置多个装置以相互互动。

## 该如何使用？

在你的模型的任何游戏对象上放置一个 `MA Rename VRChat Collision Tags` 组件，然后添加你想要重命名的标签。你可以将它们设置为 `Auto remane`，让 Modular Avatar 自动为你选择一个唯一的名称，或者你可以手动设置你想要的名称。同一游戏对象下的 Contacts 上的任何标签都将相应地被重命名。

请注意，将 `MA Rename VRChat Collision Tags` 组件放置在一个游戏对象上，而该游戏对象是位于 Hierarchy 中其它地方的 Contacts 的根变换的 `Root Transform`，这样不会重命名该 Contacts 的标签。

你也可以将 `MA Rename VRChat Collision Tags` 组件嵌套在另一个 `MA Rename VRChat Collision Tags` 下。在这种情况下，标签会先根据子组件进行重命名，然后父组件的设置将在第一轮重命名之后应用于标签。这允许你创建重命名规则的层级结构，并利用更简单的组件构建复杂的功能。