---
prev:
  text: 'Timeline Player System'
  link: 'TimelinePS/About'
next:
  text: '何为 Module'
  link: 'TimelinePS/Module'
---

# 何为 Timeline Text

`Timeline Text` 以歌词专用文件格式 `*.lrc` 为灵感开发。

一行标准的 `Timeline Text` 由以下内容构成：

- [mm:ss.xxx] text
- [分:秒.毫秒] 文本

其中，`text/文本` 部分的内容会随着 `Module` 功能而更改定义。

例如：

- 在 `LyricModule` 中，`text/文本` 为要在 `Text UI` 中显示的歌词
- 在 `PostProcessModule` 中，`text/文本` 为要对 `Post Process Volume` 应用的权重

## Timeline Text 行为

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