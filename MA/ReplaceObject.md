---
prev: false
next: false
---

# 替换对象 / Replace Object

![Replace Object](/images/MA/ReplaceObject.png)

`Replace Object` 组件允许你完全替换父模型上游戏对象的内容。

## 何时应使用？

当你想用不同的物体替换父级模型上的某个物体时，`Replace Object` 组件非常有用。例如，你可能想替换基础头像的 PhysBones 配置，或者将其身体网格完全替换为不同的网格。

## 何时不应使用？

一个对象只能被另一个对象替换。因此，当你使用 `Replace Object` 时，会限制你的资源与其它可能也想使用 `Replace Object` 的资源的兼容性。

## 详细操作

### 处理子对象

`Replace Object` 仅替换指定的特定对象。原对象和替换对象的子对象都会放在替换对象下。

### 对象命名

`Replace Object` 不会更改替换对象的名称；如果它的名称与原始对象不同，则最终对象名称将不同。然而，`Replace Object` 会将引用原始对象的任何动画路径更新为引用的替换对象。 

由于 `Replace Object` 是在模型处理的相对较晚阶段执行的，在大多数情况下这并不会带来太大区别。然而，如果—— 例如—— 你想要替换 `Body` 网格并保持 MMD 世界的兼容性（或者，相反，想为现有模型添加 MMD 兼容性），这可能就很重要。

### 组件引用的处理

`Replace Object` 将尝试修正对旧对象上组件的任何引用，使其指向新对象。如果旧对象上有多个相同的组件，那么引用将与新对象中相同索引的组件匹配（如果新对象中没有足够该类型的组件，则引用将被置为 Null）。

`Replace Object` 不会执行模糊匹配；例如，如果你将 Box Collider 替换为 Sphere Collider，对旧 Box Collider 的引用将变为 Null。