---
prev: false
next: false
---

# 同步形态键 / Blendshape Sync

![BlendshapeSync](/images/MA/ReactiveComponents/BlendshapeSync.png)

`Blendshape Sync` 组件允许你始终将一个 Renderer 中指定的形态键与另一个 Renderer 中指定形态键的值相同。

<video controls width="100%">
  <source src="./video/blendshape-sync.mp4" type="video/mp4">
</video>

## 何时应使用？

通常，模型的身体 Renderer 拥有一系列形态键用来调整外观。如果你正在为模型添加（或创建）服装，并且该服装拥有与之匹配的形态键，那 Blender Sync 就是您的不二之选！

当然，你也可以用来在不同的对象之间同步形态键，用法完全取决于你。

## 何时不应使用？

`Blender Sync` 始终将某个 Renderer 的混合形状数值完全复制到另一个渲染器。若目标对象需要不同的缩放比例或动画曲线，该功能将无法正确运作。

`Blender Sync` 不支持串用操作—— 即可以从 A 复制到 B 和 A 到 C，但不能实现从 A 到 B 再经由 B 复制到 C 的链式传输。

在运行时，`Blender Sync` 仅支持同步由动画控制的形态键。由 VRchat 内部所控制的 Eyelook 和 自动口型系统将难以准确同步。

## 设置 Blendshape Sync

在你预制件中的对象上挂载 Blendshape Sync 组件，然后单击 `+` 按钮来打开选择窗口。

![SetBlendshapeSync](/images/MA/ReactiveComponents/SetBlendshapeSync.png)

## 工作原理

`Blendshape Sync` 有两个功能：

- 在编辑模式下：它会复制基础对象的 Blendshape 值并自动应用，因此对基础对象 Shapekey 的更改都会立即影响其它对象。
- 在播放模式下：它会修改所有有关的动画，根据基础对象的 Blendshape 动画同步生成其它对象的 Blendshape 动画。