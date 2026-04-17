---
prev: false
next: false
---

# 移除顶点颜色 / Remove Vertex Color

![Remove Vertex Color](/images/MA/RemoveVertexColor.png)

`Remove Vertex Color` 组件会从其附加的对象及其子对象中移除顶点颜色。

## 何时应使用？

有时，模型会带有不用于显示的顶点颜色。当切换到使用顶点颜色的着色器时，例如  VRChat Mobile Shader，这可能会导致不希望的颜色变化。你可以使用此组件无损地移除这些顶点颜色。

![Without](/images/MA/RemoveVertexColor1.png) | ![After](/images/MA/RemoveVertexColor2.png)
-- | --
如果不使用 `Remove Vertex Color`，有些不需要的顶点颜色会使这个模型的头发变色。 | 添加 `Remove Vertex Color` 后，模型的头发颜色是正确的。

## 详细用法

只需将 `Remove Vertex Color` 组件附加到你的头像中的一个对象上—— 通常，你可以直接将其添加到模型 Root。该对象子集下的所有对象的顶点颜色都会被移除。

如果你想排除某些对象，请在你想排除的对象上添加 `Remove Vertex Color` 组件，并将 `Mode` 设置为 `Keep Vertex Colors`。该对象子集下的任何对象的顶点颜色都不会被移除。