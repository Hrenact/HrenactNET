---
prev:
  text: 'Player Log'
  link: 'WorldMenu/PlayerLog'
next:
  text: '持久化组件'
  link: 'WorldMenu/PersistentComponent'
---

# 传送系统 / Teleport System

## ▸ 传送目标点 Teleport Targets

- 在调整任何拖入了 `Target X` 的物体前，请先在 Scene 视图的工具栏内将坐标模式从 `Global` 修改为 `Local`
- 用 `Move Tool` 选中物体后，Gizmos 蓝色箭头的朝向将作为玩家被传送后面朝的方向
- 物体 Transform 组件内的的 `Scale` 属性不会影响玩家被传送后的身高

Target X | 描述 | Button `SendCustomEvent` 的内容
-- | -- | --
Target 1 | 传送目标点 1 | <Copy type="tip"	text="Goto1" toolTip="已复制" />
Target 2 | 传送目标点 2 | <Copy type="tip"	text="Goto2" toolTip="已复制" />
Target 3 | 传送目标点 3 | <Copy type="tip"	text="Goto3" toolTip="已复制" />

## ▸ 到达提示 Arrival Sound

### Arrive Sound

- 当传送完成时，作为到达提示音所播放的 Audio Source

## ▸ 黑屏过渡 Black Screen Transition

### Black Screen Anim

- 用于在执行传送时应用黑屏过渡动画，以避免画面突然切换带来的割裂感
- 只有 `Animator` 组件和 `Teleport System` 组件位于同一对象并填入此字段时才有用
- 安装与配置
  1. 打开 **Package Manager**，将 **Packages** 来源切换为 **Unity Registry**。
  2. 在右侧搜索栏输入 <Copy type="tip"	text="Post Processing" toolTip="已复制" />，选择列表中的同名包。
  3. 点击右上角的 `Install` 按钮，等待安装完成。
  4. 找到在 `VRC Scene Descriptor` 的 `Reference Camera` 字段中使用的摄像机对象。
  5. 为该摄像机对象添加 `Post-process Layer` 组件，并点击 `Trigger` 字段旁的 `This` 按钮。
  6. 在 **Project** 视图中进入 `Assets/HrenactNET/WorldMenu/Assets/anim` 目录，将 **TeleportController.controller** 拖到挂有 **Teleport System** 组件的对象上。
  7. 在该对象下创建一个名为 <Copy type="tip"	text="BlackScreen" toolTip="已复制" /> 的子对象，并关闭其 `Active` 勾选框。
  8. 为 **BlackScreen** 添加 **Post-process Volume** 组件，勾选 `Is Global`，并将 `Weight` 设为 **0**。
  9. 在 **Project** 视图中进入 `Assets/HrenactNET/WorldMenu/Assets/ppv2` 目录，将 **BlackScreen.asset** 拖入 `Post-process Volume` 组件的 `Profile` 字段。
  10. 若出现提示 **`No override set on this volume.`**，只需切换到其他对象再切回即可恢复正常显示。
- 最终的 Hierarch 层级应类似这样：

```
  Main Camera（作为 Reference Camera，挂有 Post-process Layer）
▾ TeleportSystem（挂载 Teleport System 和 Animator 组件）
┗━  BlackScreen（Active 关闭、挂载 Post-process Volume 组件）
```