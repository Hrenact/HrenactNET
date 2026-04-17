---
prev:
  text: 'Persistent Toggle'
  link: 'WorldMenu/PersistentComponent/PersistentToggle'
next:
  text: 'Music Manager'
  link: 'WorldMenu/PersistentComponent/MusicManager'
---

# 持久化音量 / Persistent Volume

## ▸ 持久化音量 Persistent Volume

### Volume_Persistent_KEY

- 用于储存音量大小的持久化键值，默认值为 `Volume_RenameMe`

::: danger

- 请确保该值是 **唯一且没有被复用** 的！
- 重复的持久化键值 **会导致世界变的危险** ！

:::

### Volume Slider

- 用于调用 `SliderUpdated` 的按钮
- Slider `SendCustomEvent` 的内容为 <Copy type="tip"	text="SliderUpdated" toolTip="已复制" />

### Audio Source

- 用于应用音量设置的 Audio Source 组件

## ▸ 音量状态图标 Volume Icon

### Volume Icon

- 用于显示打开或关闭声音时的 `Sprite`

### Volume On Sprite

- 当音量不为 0 时，在 `Volume Icon` 内显示的 Sprite 资产

### Volume Off Sprite

- 当音量为 0 时，在 `Volume Icon` 内显示的 Sprite 资产