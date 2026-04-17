---
prev:
  text: '组件参考'
  link: 'WorldMenu/ComponentReference'
next:
  text: 'Page Manager'
  link: 'WorldMenu/PageManager'
---

# 召唤世界菜单 / Summon World Menu 

## ▸ 菜单对象 Menu Object

### Menu Root

- 菜单的根对象，`Animated Curve` 以及 `Auto Close Distance` 都是基于该对象进行的
- 你可以随意挪动和缩放根对象，但请保持 X/Y/Z 的缩放比例一致
- 当运行时，当前的位置将作为菜单的常驻点位

### Menu Canvaes

- `Menu Root` 对象下的所有 Canvas 组件，用于应用透明度动画

## ▸ 配置参数 Configuration

### Spawn Distance

- 当菜单被召唤时，与玩家视角球相距多远

### Auto Close Distance

- 当玩家离开被召唤出来的菜单多远时，自动关闭菜单并返回常驻点位

### Transaction Duration

- 过渡动画的播放时长，此设置同时影响打开和关闭时的动画时长
- 单位为秒

## ▸ 动画曲线 Animated Curve

### Scale Curve

- 播放过渡动画时，对 `Menu Root` 所应用的缩放动画

### Use Fade

- 是否同时将 `Scale Curve` 作为透明度动画应用于 `Menu Canvaes`

## ▸ 开关音效 / Open/Close SFX

### Open SFX

- 当菜单被手动召唤时，作为打开提示音所播放的 Audio Source

### Close SFX

- 当菜单被手动或自动关闭时，作为关闭提示音所播放的 Audio Source

## ▸ 最大输入间隔 / Max Input Interval

### Sequence Max Interval

- 当玩家执行了召唤/关闭菜单的第一个步骤后，在多久内执行第二个步骤才有效
- 单位为秒

## ▸ 滚动锁定 Scroll Rects Lock

### Scroll Rects

- `Menu Root` 对象下的所有 Scroll Rects 组件，用于在播放过渡动画时禁用滚动来避免错位