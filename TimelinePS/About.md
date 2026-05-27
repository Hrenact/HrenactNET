---
prev: false
next:
  text: '何为 Timeline Text'
  link: 'TimelinePS/TimelineText'
---

<p align="center">
<img src="https://booth.pximg.net/65f805ce-cafe-401a-8a59-17e2b7719def/i/8405950/7bdde5c0-c394-483e-9755-f052981bb57a_base_resized.jpg" alt="World Menu" width="512" height="512" />
</p>

---

- [English](https://hrenact.net/en/TimelinePS/About)
- [日本語](https://hrenact.net/jp/TimelinePS/About)

::: warning
此资产并非开箱即用。你需要具备一定程度的 Unity 操作经验、U# 编程知识，以及对世界构建流程的理解，才能正常且顺利地使用本资产。
:::

---

# Timeline Player System

Timeline Player System 是一个略微复杂的 VRChat 世界演出系统。

其中，大部分 **模块/Module** 围绕类似于文件 `*.lrc` 格式的时间轴文本配合 **核心/Core** 进行一系列操作，来实现相当丰富的视觉效果。

- 下面是一个典型的使用例：

与 **一束花** 交互后，世界 BGM 逐渐消失，同时音乐响起，在空中逐句显示歌词，并在高潮阶段调亮世界亮度，临近末尾时显示照片，歌曲结束后在桌面上显示留言便签。

## 提供的功能

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

## 示例世界

下面是使用了该系统的世界，请随意参观。

- [Timeline Player System Demo](https://vrchat.com/home/world/wrld_1d69386d-4d62-43e1-a86f-e7b1fda98f31/info)
- [.1 Room](https://vrchat.com/home/world/wrld_73bc1f16-70db-4cad-9246-17954cca1340/info)

::: tip
你可以在评论区留下你的作品链接，我会抽空游玩，并将合适的地图添加进示例世界中。
:::