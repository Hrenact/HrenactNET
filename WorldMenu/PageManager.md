---
prev:
  text: 'Summon World Menu'
  link: 'WorldMenu/SummonWorldMenu'
next:
  text: 'Home'
  link: 'WorldMenu/Home'
---

# 页面管理器 / Page Manager

## ▸ 页面设置 Page Settings

### Pages

- 按下 Button 来切换页面时所显示的所有页面 Root
- 最大数量为 6

数组顺序 | 页面顺序 | Page Index | Button `SendCustomEvent` 的内容
-- | -- | -- | --
Element 0 | 第一页 | 0 | <Copy type="tip"	text="ShowPage0" toolTip="已复制" />
Element 1 | 第二页 | 1 | <Copy type="tip" text="ShowPage1" toolTip="已复制" />
Element 2 | 第三页 | 2 | <Copy type="tip" text="ShowPage2" toolTip="已复制" />
Element 3 | 第四页 | 3 | <Copy type="tip" text="ShowPage3" toolTip="已复制" />
Element 4 | 第五页 | 4 | <Copy type="tip" text="ShowPage4" toolTip="已复制" />
Element 5 | 第六页 | 5 | <Copy type="tip" text="ShowPage5" toolTip="已复制" />

### Page Canvases

- `Pages` 数组内对象的所有 Canvas 组件，用于应用透明度动画

### Default Page Index

- 当运行时，自动切换并显示的 `Page Index`

## ▸ 配置参数 Configuration

### Transaction Duration

- 切换动画的播放时长，值乘以 2 为最终时长
- 单位为秒

## ▸ 动画曲线 Animated Curve

### Scale Curve

- 播放页面切换动画时，对 `Pages` 所应用的切换动画

### Use Fade

- 是否同时将 `Scale Curve` 作为透明度动画应用于 `Page Canvaes`

## ▸ 滚动锁定 Scroll Rects Lock

### Scroll Rects

- `Pages` 数组内对象下的所有 Scroll Rects 组件，用于在播放切换动画时禁用滚动来避免错位