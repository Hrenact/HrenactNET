---
prev: false
next: false
---

# 骨骼代理 / Bone Proxy

![Bone Proxy](/images/MA/BoneProxy.png)

`Bone Proxy` 允许你将预制件中的对象放置到原始模型中某个对象的子集中。

`Bone Proxy` 还会调整任何引用了旧对象位置的 Animator，使其在对象移动后改为引用新的路径。

## 何时应使用？

`Bone Proxy` 可用于你想把物体放进模型内现有对象内。

## 何时不应使用？

`Bone Proxy` 不应用来配置服装，请改用 [Merge Armature](MergeArmature)。

## 设置 Bone Proxy

在你的预制件上挂载 Bone Proxy 组件，并将该对象的目标位置拖进 `Target` 字段。带有 Bone Proxy 标记的对象将被放置在目标对象子集内。

### 在预制件中使用

`Bone Proxy` 组件会字段会自动把你指定的对象转译为一个人形骨骼及其相对路径引用。这确保在保存为预制件后，它能够自动恢复引用。

如果你想调整内部引用，可在 `Advanced` 折叠面板中查看。

### 附加模式 / Attachment Mode

`Bone Proxy` 可以通过两种不同的方式连接，具体取决于使用场景。

在 `As child at root` 附加模型中，`Bone Proxy` 所附加的对象将被重新父级到目标对象，并且其局部位置与方向都会归零。这将使它与目标对象拥有相同的位置与方向。此模式推荐用于非模型专用的预制件。

在 `As child keep world pose` 附加模式中，`Bone Proxy` 所附加的对象将被重新父级到目标对象， 但其世界位置和方向都会被保留。这通常只适用于你想要的头像专用预制件，将物体放置在相对于骨骼父级的精确位置。例如，它可以用于放置布料组件的碰撞器。

你也可以选择仅保留原来的位置或仅保持旋转，让另一个属性匹配目标骨骼。这在更高级的应用中有时会有用。

当你为 `Bone Proxy` 组件设置 `Target` 时，`Attachment Mode` 会基于当前对象是否已处于目标骨骼的位置与方向自动设定。