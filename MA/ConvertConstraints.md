---
prev: false
next: false
---

# 约束转换 / Convert Constraints

`Convert Constraints` 组件用于指示 Modular Avatar 在构建模型时非破坏性的将 Unity Constraint 转换为 VRChat Constraint。它会转换添加了该组件的对象上的任何约束（以及引用了这些约束的动画），和该对象下的所有子对象。它还会尝试使用 VRCSDK 的 Auto Fix 按钮来修复因使用了旧版 Modular Avatar 而损坏的动画。

## 何时应使用？

在大多数情况下，将其放在你的头像 Root 上可能是个好主意，因为预先转换约束可以显著提高性能。当安装了 MA 后，如果头像根节点上还没有此组件，VRChat 的 Auto Fix 按钮会自动将其添加进去。

## 何时不应使用？

提供此组件的主要目的是允许用户在怀疑其可能导致问题时，通过移除此组件来禁用该功能。