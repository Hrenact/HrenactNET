---
prev: false
next: false
---

# 反应调试器 / Reaction Debugger

![ReactionDebugger](/images/MA/ReactiveComponents/ReactionDebugger.png)

Reaction Debugger 允许你虚拟的更改 Hierarchy 中 Menu items 和游戏对象的状态。因此，你可以用来测试你的响应式组件的行为方式，而无需手动与你的模型进行交互。

要打开 Reaction Debugger，请右键单击游戏对象，然后选择 `Modular Avatar -> Show Reaction Debugger`。或者，你也可以点击反应式组件上的 `Open reaction debugger` 按钮来打开。

调试器窗口分为两个部分：其一显示对象状态，其二显示反应部分。

## 对象状态 / Object state

![ObjectState](/images/MA/ReactiveComponents/ObjectState.png)

顶部可以通过更换 `Inspecting object` 字段来选择要检查的对象。默认情况下，它将显示当前选中的对象，但你也可以通过更改字段来检查其它对象。与 Inspector 窗口一样，你可以通过锁定视图来避免选中其它对象时自动切换要检查的对象。

在 `Inspecting object` 字段下方，有一个 `Clear all overrides` 按钮，稍后再做详细介绍。在此处，我们还能看到一个 `Object state: ACTIVE`，用于表示该对象（实际上）处于启用状态。

强制设定对象为“active”或“inactive”实际上并不会改变它在 Hierarchy 中的状态，但它会在 Scene 视图表现为启用或禁用了它。

## 反应部分 / Affected By

![ReactionSection](/images/MA/ReactiveComponents/ReactionSection.png)

反应部分显示了此对象所有将进行的反应效果。它还显示了触发反应所需要具备的条件，并允许你轻松覆盖这些条件。