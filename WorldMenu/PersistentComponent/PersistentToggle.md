---
prev:
  text: '持久化组件'
  link: 'WorldMenu/PersistentComponent'
next:
  text: 'Persistent Volume'
  link: 'WorldMenu/PersistentComponent/PersistentVolume'
---

# 持久化开关 / Persistent Toggle

## ▸ 持久化开关 Persistent Toggle

### Toggle_Persistent_Key

- 用于储存开关状态的持久化键值，默认值为 `Toggle_RenameMe`

::: danger

- 请确保该值是 **唯一且没有被复用** 的！
- 重复的持久化键值 **会导致世界变的危险** ！

:::

### Button

- 用于调用 `ButtonUpdated` 的按钮
- Button `SendCustomEvent` 的内容为 <Copy type="tip"	text="ButtonUpdated" toolTip="已复制" />

### Objects To Hiden

- 按下按钮后，将会隐藏的 Game Object 数组

### Objects To Show

- 按下按钮后，将会显示的 Game Object 数组