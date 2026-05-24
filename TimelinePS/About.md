---
prev: false
next: false
---

<p align="center">
<img src="https://booth.pximg.net/65f805ce-cafe-401a-8a59-17e2b7719def/i/8405950/7bdde5c0-c394-483e-9755-f052981bb57a_base_resized.jpg" alt="World Menu" width="512" height="512" />
</p>

---

::: warning
此资产并非开箱即用。你需要具备一定程度的 Unity 操作经验、U# 编程知识，以及对世界构建流程的理解，才能正常且顺利地使用本资产。
:::

---

# 关于 Timeline Player System

Timeline Player System 是一个略微复杂的 VRChat 世界演出系统。

其中，大部分 **模块/Module** 围绕类似于文件 `*.lrc` 格式的时间轴文本配合 **核心/Core** 进行一系列操作，来实现相当丰富的视觉效果。

- 下面是一个典型的使用例：

与 **一束花** 交互后，世界 BGM 逐渐消失，同时音乐响起，在空中逐句显示歌词，并在高潮阶段调亮世界亮度，临近末尾时显示照片，歌曲结束后在桌面上显示留言便签。

---

# 提供的功能

**TimelinePlayerSystem.zip** ：

名称 | 功能
-- | --
TimelinePlayerCore | - 玩家同步<br>- 播放主要音频 `Music Source`<br>- 搜寻与初始化 `Module`<br>- 向 `Module` 传递时间、播放、结束状态
ActiveModule | - 在播放开始后 `激活/禁用` `Activate On Play` 中的物体<br>- 在播放结束后 `激活/禁用` `Deactivate On Stop` 中的物体
DuckModule | - 在播放开始后暂时压低 `Background Source` 的音量<br>- 在播放结束后恢复 `Background Source` 的音量<br>- 若指定了 `Sync Slider`，则会同步临时禁用互动
ImageModule | - 在播放开始后，根据 `Timeline Text` 中解析出的时间和值自动调整 `Target Image` 的透明度
LyricModule | - 在播放开始后，根据 `Timeline Text` 中解析出的时间和歌词自动切换 `Text UI` 的文本
PostProcessModule | - 在播放开始后，根据 `Timeline Text` 中解析出的时间和权重自动调整 `Post Process Volume` 的权重
VolumeModule | - 在播放开始后，根据 `Timeline Text` 中解析出的时间和音量自动调整 `Target Source` 的音量

---

# 何为 Timeline Text

`Timeline Text` 以歌词专用文件格式 `*.lrc` 为灵感开发。

一行标准的 `Timeline Text` 由以下内容构成：

- [mm:ss.xxx] text
- [分:秒.毫秒] 文本

其中，`text/文本` 部分的内容会随着 Module 功能而更改定义。

例如：

- 在 `LyricModule` 中，`text/文本` 为要在 `Text UI` 中显示的歌词
- 在 `PostProcessModule` 中，`text/文本` 为要对 `Post Process Volume` 应用的权重

::: warning
Module 并不会对错误的 `Timeline Text` 格式进行拦截，这可能会导致演出出现错误。
:::

---

# Timeline Text 行为

下面是一个 `LyricModule` 的 `Timeline Text` 示例：

``` text
[00:00.000] 你好，
[00:01.000] 欢迎观看 Timeline Player System 的演示。
[00:05.000] 
[00:06.000] 现在，
[00:07.000] 你看到的是 Lyric Module 正在工作。
[00:11.000] 每一句话，
[00:12.000] 都会在正确的时间出现，
[00:14.000] 并且平滑地淡入淡出。
```

假设我们将 `Fade Duration` 的值设为了 `0.2` 秒，随后执行 <Copy type="tip" text="TimelinePlayerCore.SongStart()" toolTip="已复制" />，下面是实际运行时 Timeline :

时间 | TMP-Text 透明度 | TMP-Text 显示的文本
:--: | :--: | --
[00:00.000] | 开始淡入 | 你好，
[00:00.200] | 淡入完成 | 你好，
[00:01:000] | 开始淡出 | 你好，
[00:01.200] | 淡出完成，开始淡入 | 欢迎观看 Timeline Player System 的演示。
[00:01.400] | 淡入完成 | 欢迎观看 Timeline Player System 的演示。
[00:05.000] | 开始淡出 | 欢迎观看 Timeline Player System 的演示。
[00:05.200] | 淡出完成，开始淡入 | ` `
[00:05.400] | 淡入完成 | ` `
[00:06:000] | 开始淡出 | ` `
[00:06.200] | 淡出完成，开始淡入 | 现在，
[00:06.400] | 淡入完成 | 现在，
[00:07.000] | 开始淡出 | 现在，
[00:07.200] | 淡出完成，开始淡入 | 你看到的是 Lyric Module 正在工作。
[00:07.400] | 淡入完成 | 你看到的是 Lyric Module 正在工作。
[00:11.000] | 开始淡出 | 你看到的是 Lyric Module 正在工作。
[00:11.200] | 淡出完成，开始淡入 | 每一句话，
[00:11.400] | 淡入完成 | 每一句话，
[00:12.000] | 开始淡出 | 每一句话，
[00:12.200] | 淡出完成，开始淡入 | 都会在正确的时间出现，
[00:12.400] | 淡入完成 | 都会在正确的时间出现，
[00:14.000] | 开始淡出 | 都会在正确的时间出现，
[00:14.200] | 淡出完成，开始淡入 | 并且平滑地淡入淡出。

我们不难发现：除去第一句歌词，要让歌词完全显示出来（既透明度为 1），需要在 `Timeline Text 中指定的时间 + Fade Duration × 2` 时才完成。

若对精度有较高的要求，建议在编写 `Timeline Text` 时，将时间提前 `Fade Duration × 2` 。

---

# 如何制作 Module

`TimelinePlayerCore` 在运行时会自动寻找层级下的 `UdonSharpBehaviour`，并调用它们。

一个合适的 `Module` 可包含以下方法、字段或代码：

| 方法 | 说明 |
| -- | -- |
| <Copy type="tip" text="public void Init()" toolTip="已复制" /> | `Core` 开始初始化时对 `Module` 所调用的方法 |
| <Copy type="tip" text="public void OnPlay()" toolTip="已复制" /> | `Core` 被调用 `SongStart()` 时对 `Module` 所调用的方法 |
| <Copy type="tip" text="public void OnStop()" toolTip="已复制" /> | `Core` 结束播放时对 `Module` 所调用的方法 |
| <Copy type="tip" text="public void OnTimeUpdate()" toolTip="已复制" /> | `Core` 时间更新时对 `Module` 所调用的方法 |

| 字段 | 说明
| -- | -- |
| <Copy type="tip" text="private bool hasSynced;" toolTip="已复制" /> | 用于在 `Module` 内部判断是否和他人同步 |
| <Copy type="tip" text="[HideInInspector]" toolTip="已复制" /><br><Copy type="tip" text="public float currentTime;" toolTip="已复制" /> | 该字段由 `Core` 自动填入<br>`Core` 统一广播的当前播放进度/时间 |

| 代码 | 说明 |
| -- | -- |
| <Copy type="tip" text="namespace YOURNAME" toolTip="已复制" /> | 避免名称重复而导致的代码冲突 |
| <Copy type="tip" text="[UdonBehaviourSyncMode(BehaviourSyncMode.None)]" toolTip="已复制" /> | `Core` 已负责同步播放状态，无需二次实现

对于 `Debug.Log` ，可参考以下示例编写：

``` C#
// Core 通知模块初始化时
Debug.Log("<color=#COLOR>[ModuleName]</color> <b>" + gameObject.name + "</b> 模块开始初始化。");
// 更新目标的值时
Debug.Log("<color=#COLOR>[ModuleName]</color> <b>" + gameObject.name + "</b> 正在更新值，目标: <b>" + Value + "</b>");
```

---

# 示例世界

下面是使用了该系统的世界，请随意参观。

- [.1 Room](https://vrchat.com/home/world/wrld_73bc1f16-70db-4cad-9246-17954cca1340/info)

::: tip
你可以在评论区留下你的作品链接，我会抽空游玩，并将合适的地图添加进示例世界中。
:::

---

# 疑难解答

### Q：歌词中出现了类似“口口口”的字样

A：这是因为当前所使用的 `Font Asset` 中不包含这个字的字体信息，你可以根据以下步骤修复：

1. Unity 窗口顶栏
2. Edit > Project Setting...
3. Project Setting 窗口
4. 右上角搜索框输入 <Copy type="tip" text="Match Material Presets" toolTip="已复制" />
5. 取消勾选高亮的 `Match Material Presets` 复选框

这会让 VRChat 接管未包含的字体信息，并使用 VRChat 的字体显示出缺失的文本。

### Q：导入后控制台报错，且 Unity 无法进入播放模式

A：可能是因为工程内暂未导入 `Post Processing` 包，导入后即可解决。

若不需要后处理相关演出：<br>转到目录 `Assets\HrenactNET\TimelinePlayerSystem\Script\Module` 并删除 `PostProcessModule` 文件夹即可。