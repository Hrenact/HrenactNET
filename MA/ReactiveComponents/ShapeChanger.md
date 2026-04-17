---
prev: false
next: false
---

# 形变控制器 / Shape Changer

![ShapeChanger](/images/MA/ReactiveComponents/ShapeChanger.png)

Shape Changer 组件启用时，会修改模型中 Rendered 形态键的值。

Shape Changer 是一种反应式组件。有关 [反应式组件]() 的基础规则和行为，请参阅相关页面。

## 何时使用？

此组件专为服装 Mesh 设计，用于删除或缩小被服装网格遮挡或与其穿模的模型部分。

## 何时不应使用？

此组件不能用来修改同时由其它动画进行处理的形态键，请改为由动画控制的包含 Shape Changer 组件的对象的开/关状态。

## 设置 Shape Changer

将 Shape Changer 组件挂载到服装中的任一 Skinned Mesh Renderer 对象。随后将你想设置的 Render （例：模型身体）拖入 `Target Renderer` 字段。

接下来，点击 `+` 按钮来打开形态键选择窗口，单击其中一个形态键名称后将自动添加至 Shape Changer。Shape Changer 的应用效果将在 Scene 视图中实时预览。由于你正在设置的部件大概率被其它对象所遮挡，因此使用调试覆盖层 `Overdraw` 可以帮助透过物体查看下面的情况。

### 修改模式

每个形态键皆可设置修改模式为 `Delete` 或 `Set` 模式：

- 在 `Set` 模式下，当 Shape Changer 启用时，形态键值将被调整为事先设定的值
- 在 `Delete` 模式下，Shape Changer 将尝试移除受形态键所影响的网格
    - 注意：如果 Shape Changer 并不是永远处于启用状态（即存在被动画打开或关闭），则形态键的值将被设置为 100

通常，当身体部位的形态键收缩到几乎不可见时，建议使用 `Delete` 模式。因为它将生成不附带动画的模型。

### 与动画交互

Shape Changer 可响应其自身以及父级对象的驱动动画。禁用这些游戏对象时，Shape Changer 对目标 Renderer 的影响也将被移除。你可以用于切换服装、移除服装部件等情况—— 此时基础网格将自动还原。

如果多个 Shape Changer 同时操作同一形态键，则 Hierarchy 中最底部的组件优先生效。