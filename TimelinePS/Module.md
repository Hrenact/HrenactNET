---
prev:
  text: '何为 Timeline Text'
  link: 'TimelinePS/TimelineText'
next:
  text: '疑难解答'
  link: 'TimelinePS/QA'
---

# 何为 Module

`Module` 是作为 `Core` 功能 **可选/拓展项** 的存在。其核心理念在于：

- 易于排查和复用
- 不影响 `Core` 和其它 `Module`

## 安装 Module

`TimelinePlayerCore` 在运行时会自动寻找层级下的 `UdonSharpBehaviour`，并调用它们。

因此，要安装 `Module` ，只需将挂载了 `Module` 脚本的物体拖入至挂在了 `Core` 脚本的物体层级内即可。

``` text
▼ TimelinePlayerCore
├─ LyricModule1
├─ LyricModule2
├─ ...
├─ YourModuleHere
├─ ...
└─ ActiveModule
```

## 制作 Module

要制作一个合适的 `Module` ，你可以参考下方的章节。

最推荐的方式是以 `ActiveModule` 为参考，该 `Module` 没有复杂的 `Timeline` 系统，很适合作为创建 `Module` 的入门参考。

### 方法

| 方法 | 说明 |
| -- | -- |
| <Copy type="tip" text="public void Init()" toolTip="已复制" /> | - `Core` 开始初始化时对 `Module` 所调用的方法 |
| <Copy type="tip" text="public void OnPlay()" toolTip="已复制" /> | - `Core` 被调用 `SongStart()` 时对 `Module` 所调用的方法 |
| <Copy type="tip" text="public void OnStop()" toolTip="已复制" /> | - `Core` 结束播放时对 `Module` 所调用的方法<br>- 加入房间时若播放已结束则 `Core` 对 `Module` 所调用的方法 |
| <Copy type="tip" text="public void OnTimeUpdate()" toolTip="已复制" /> | - `Core` 时间更新时对 `Module` 所调用的方法 |

### 字段

| 字段 | 说明
| -- | -- |
| <Copy type="tip" text="private bool hasSynced;" toolTip="已复制" /> | - 用于在 `Module` 内部判断是否和他人同步 |
| <Copy type="tip" text="[HideInInspector]" toolTip="已复制" /><br><Copy type="tip" text="public float currentTime;" toolTip="已复制" /> | - 该字段由 `Core` 自动填入<br>- `Core` 统一广播的当前播放进度/时间 |

### 代码

| 代码 | 说明 |
| -- | -- |
| <Copy type="tip" text="namespace YOURNAME" toolTip="已复制" /> | - 避免名称重复而导致的代码冲突 |
| <Copy type="tip" text="[UdonBehaviourSyncMode(BehaviourSyncMode.None)]" toolTip="已复制" /> | - `Core` 已负责同步播放状态，无需二次实现

### 日志

``` C#
// Core 通知 Module 初始化时
Debug.Log("<color=#COLOR>[ModuleName]</color> <b>" + gameObject.name + "</b> 模块开始初始化。");
// 更新目标的值时
Debug.Log("<color=#COLOR>[ModuleName]</color> <b>" + gameObject.name + "</b> 正在更新值，目标: <b>" + Value + "</b>");
```

为何推荐这样写：

- `<color>`  : 着色标签 : 用于将该 `Module` 的日志与其它脚本的日志快速分辨
- `<b> + gameObject.name`  : 加粗标签 + 挂载了 `Module` 的物体名称 : 可快速找到需排查的物体
- `<b> + Value`  : 加粗标签 + 值 : 突出显示值的状态