---
prev:
  text: '何为 Module'
  link: 'TimelinePS/Module'
next: false
---

# 疑难解答

未涵盖的问题可在评论区提出，我会尽量解答。

## Q：Timeline Module 没有按预期执行

A：`Timeline Text` 的时间格式可能错了：

正确的时间如下所示，请注意 `秒` 与 `毫秒` 之间为 `.` 而不是 `:`

- `[` `分` `:` `秒` `.` `毫秒` `]`

另一种可能是 `Timeline Text` 的值越界了：

- `LyricModule` 接受任何内容，包括富文本标签
- `VolumeModule` 只接受 0-1 之间的数值，例如：0.75
- 以此类推……

请注意，时间与值之间也带有一个 **空格** ：

- `[分:秒.毫秒]`+` `+`文本`

## Q：歌词中出现了类似“口口口”的字样

A：这是因为当前所使用的 `Font Asset` 中不包含这个字的字体信息，你可以根据以下步骤修复：

1. Unity 窗口顶栏
2. Edit > Project Setting...
3. Project Setting 窗口
4. 右上角搜索框输入 <Copy type="tip" text="Match Material Presets" toolTip="已复制" />
5. 取消勾选高亮的 `Match Material Presets` 复选框

这会让 VRChat 接管未包含的字体信息，并使用 VRChat 的字体显示出缺失的文本。

## Q：导入后控制台报错，且 Unity 无法进入播放模式

A：可能是因为工程内暂未导入 `Post Processing` 包，导入后即可解决。

若不需要后处理相关演出：<br>转到目录 `Assets\HrenactNET\TimelinePlayerSystem\Script\Module` 并删除 `PostProcessModule` 文件夹即可。