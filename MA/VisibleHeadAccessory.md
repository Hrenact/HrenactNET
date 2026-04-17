---
prev: false
next: false
---

# 可见头部部件 / Visible Head Accessory

![Visible Head Accessory](/images/MA/VisibleHeadAccessory.png)

该组件可用于让放置在头部骨骼下的游戏对象在第一人称视角中可见。

## 何时应使用？

当你想看到自己的头发或其他佩戴在头上的饰品，而不需要照镜子时。

## 何时不应使用？

此组件无法作为 PhysBone 链的子项使用（你可以将其添加到父项中）。

在头部的 *所有* 子项上使用此组件可能会分散注意力，因为你的刘海会不断挡住视线。

## 设置 Visible Head Accessory

只需在头骨的子集物体下添加一个 `Visible Head Accessory` 组件即可。没有需要设置的配置选项。

## 工作原理

在 VRChat 中，该组件使用 VRCHeadChop 来使选定的骨骼可见。与仅使用 VRCHeadChop 的主要区别在于，它调整网格以确保三角形不会穿过玩家的视角。

这是通过查找某些顶点权重分配给可见骨骼，而另一些权重分配给隐藏骨骼（例如根部 `Head` 骨骼）来实现的。然后，组件会调整网格，添加新的代理骨骼并切换权重，以确保三角形完全可见。