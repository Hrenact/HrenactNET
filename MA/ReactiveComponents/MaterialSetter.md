---
prev: false
next: false
---

# 材质球设置器 / Material Setter

![MaterialSetter](/images/MA/ReactiveComponents/MaterialSetter.png)

Material Setter 组件允许你在模型上更改 (Skinned) Mesh Renderer 的材质球，当挂载了 Material Setter 组件的游戏对象处于启用状态时。

Material Setter 是一种反应式组件。有关 [反应式组件]() 的基础规则和行为，请参阅相关页面。

## 何时应使用？

Material Setter 可以用于更改对象的材质球。能被菜单项或其它对象的消失/出现做出响应。

## 设置 Material Setter

将 Material Setter 组件挂载到需要控制其状态的游戏对象。该对象可以是用于启用/禁用动画控制的对象，也可置于Menu Item（或子对象）上。你也可以挂载到保持开启的对象上，以便随时更改对象的材质球。

接下来，单击 `+` 按钮来添加新条目。将需要进行操作的 (Skinned) Mesh Renderer 拖入顶部的对象栏，在右侧下拉框选择要更改的材质槽，最后将目标材质球放入 `Set material to` 字段即可。

默认情况下，Material Setter 会在游戏对象启用（及 / 或关联 Menu Item 被选中）时替换材质球。如果想在游戏对象禁用时切换材质球，请勾选 `Inverse condition`。