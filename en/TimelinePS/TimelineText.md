---
prev:
  text: 'Timeline Player System<br>Timeline Player System'
  link: 'en/TimelinePS/About'
next:
  text: 'What is Module<br>何为 Module'
  link: 'en/TimelinePS/Module'
---

# What is Timeline Text

`Timeline Text` is developed with inspiration from the lyrics-specific file format `*.lrc` .

A standard line of `Timeline Text` consists of the following:

- [mm:ss.xxx] text
- [minutes:seconds.milliseconds] text

The content of the `text` portion changes its definition depending on the `Module` functionality.

For example:

- In `LyricModule` , the `text/文本` is the lyrics to be displayed in the `Text UI`
- In `PostProcessModule` , the `text/文本` is the weight to be applied to the `Post Process Volume`

## Timeline Text Behavior

Below is an example of `Timeline Text` for a `LyricModule` :

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

Assuming we set the `Fade Duration` to `0.2` seconds, and then execute <Copy type="tip" text="TimelinePlayerCore.SongStart()" toolTip="Copied" />, the following is the actual runtime Timeline:

Time | TMP-Text Transparency | TMP-Text Displayed text
:--: | :--: | --
[00:00.000] | Fade in start | 你好，
[00:00.200] | Fade in complete | 你好，
[00:01:000] | Fade out start | 你好，
[00:01.200] | Fade out complete, Fade in start | 欢迎观看 Timeline Player System 的演示。
[00:01.400] | Fade in complete | 欢迎观看 Timeline Player System 的演示。
[00:05.000] | Fade out start | 欢迎观看 Timeline Player System 的演示。
[00:05.200] | Fade out complete, Fade in start | ` `
[00:05.400] | Fade in complete | ` `
[00:06:000] | Fade out start | ` `
[00:06.200] | Fade out complete, Fade in start | 现在，
[00:06.400] | Fade in complete | 现在，
[00:07.000] | Fade out start | 现在，
[00:07.200] | Fade out complete, Fade in start | 你看到的是 Lyric Module 正在工作。
[00:07.400] | Fade in complete | 你看到的是 Lyric Module 正在工作。
[00:11.000] | Fade out start | 你看到的是 Lyric Module 正在工作。
[00:11.200] | Fade out complete, Fade in start | 每一句话，
[00:11.400] | Fade in complete | 每一句话，
[00:12.000] | Fade out start | 每一句话，
[00:12.200] | Fade out complete, Fade in start | 都会在正确的时间出现，
[00:12.400] | Fade in complete | 都会在正确的时间出现，
[00:14.000] | Fade out start | 都会在正确的时间出现，
[00:14.200] | Fade out complete, Fade in start | 并且平滑地淡入淡出。

We can easily observe that: apart from the first lyric, for a lyric to be fully displayed (i.e., opacity of 1), it requires the `time specified in the Timeline Text + Fade Duration × 2` to complete.

If high precision is required, it is recommended to shift the time forward by `Fade Duration × 2` when authoring the `Timeline Text` .