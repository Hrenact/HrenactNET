---
prev:
  text: 'Home'
  link: 'WorldMenu/Home'
next:
  text: 'Teleport System'
  link: 'WorldMenu/TeleportSystem'
---

# 玩家日志 / Player Log

## ▸ 玩家日志 Player Log

### Player Log Texts

- 用于显示玩家加入和离开日志的 TMP Text 数组
- 更新方式为按照数组内顺序从上至下更新
- 加入的玩家将使用绿色时间标记，离开的玩家将使用红色时间标记

数组顺序 | Van 加入世界 | Andrew 加入世界 | Van 离开世界 | Elaine 加入世界
-- | -- | -- | -- | --
Element 0 | <font color=#2EE62E>[06:20]</font> Van | <font color=#2EE62E>[06:35]</font> Andrew | <font color=#E62E2E>[07:10]</font> Van | <font color=#2EE62E>[07:25]</font> Elaine
Element 1 | | <font color=#2EE62E>[06:20]</font> Van | <font color=#2EE62E>[06:35]</font> Andrew | <font color=#E62E2E>[07:10]</font> Van
Element 2 | | | <font color=#2EE62E>[06:20]</font> Van | <font color=#2EE62E>[06:35]</font> Andrew
Element 3 | | | | <font color=#2EE62E>[06:20]</font> Van
... |