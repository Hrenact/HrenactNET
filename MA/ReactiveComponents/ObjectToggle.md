---
prev: false
next: false
---

# 对象开关 / Object Toggle

![ObjectToggle](/images/MA/ReactiveComponents/ObjectToggle.png)

Object Toggle 组件允许你根据启用状态并基于控制对象中的设定来更改一个或多个其它游戏对象的启用状态。

Object Toggle 是一种反应式组件。有关 [反应式组件]() 的基础规则和行为，请参阅相关页面。

## 何时应使用？

当 Mesh render A 完全遮住 Mesh render B 时，此组件可用于禁用 Mesh render B。例如：当内衣完全被外衣覆盖时，你可以禁用内衣。

## 设置 Object Toggle

只需要将 Object Toggle 挂载到控制对象，然后单击 `+` 按钮并拖入要控制的目标对象，随后使用复选框来设定响应时是启用还是禁用目标对象。