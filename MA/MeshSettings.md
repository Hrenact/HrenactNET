---
prev: false
next: false
---

# 网格设定 / Mesh Settings

![Mesh Settings](/images/MA/MeshSettings.png)

`Mesh Settings` 组件允许你为特定游戏对象下的所有网格设置某些网格设置（Anchor Override 和 Bounds）。

## 何时应使用？

您可以将此组件放置在模型的 Root，以确保模型中所有网格的 Bounds 和 Anchor Override 一致。

`Setup Outfit` 功能还会自动为新添加的服装配置网格设置组件。

最后，`Mesh Settings` 可以用于排除网格受到 Hierarchy 中更高网格设置的影响。

## 何时不应使用？

为将要分发的资产设置 Bounds 或 Anchor Override 需要小心，因为这些配置可能与他人所应用的模型不一致。通常，这些只应设置在为特定模型设计的资产上。

## 手动配置 Mesh Settings

当你向游戏对象添加 `Mesh Settings` 时，初始状态下它不会执行任何操作。为了使设置组件生效，你需要更改 `Anchor Override Mode` 和/或 `Bounds Override Mode`。它们支持以下选项：

- `Inherit`：此组件对该设置没有作用；它将继承父级网格设置中设置的值。
- `Set`：此组件会在其游戏对象或其子集对象上的任何网格上设置相应的设置。
- `Don't set`：此组件会阻止任何父级网格设置生效。网格将保持默认设置。
- `Set or inherit`：如果存在处于 `Set` 模式的父级网格设置，则会使用该设置。如果没有适用的父级网格设置，则使用此组件的设置。这对于服装预制件非常有用，可确保任何模型上的设置具有优先权。

在配置 Bounds 时，边界框将相对于您指定为 `Root Bone` 的变换来确定。请注意，边界仅影响 Skinned Mesh Renderers，但 Anchor Override 也会影响其他类型的渲染器，例如 Mesh Renderer 或 Line Renderer。