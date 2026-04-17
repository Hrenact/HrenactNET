---
prev:
  text: 'Persistent Volume'
  link: 'WorldMenu/PersistentComponent/PersistentVolume'
next: false
---

# 音乐管理器 / Music Manager

## ▸ 持久化歌曲 Persistent Song

### Song_Persistent_Key

- 用于储存选择了哪个歌曲的持久化键值，默认值为 `SongIndex_RenameMe`

::: danger

- 请确保该值是 **唯一且没有被复用** 的！
- 重复的持久化键值 **会导致世界变的危险** ！

:::

## ▸ 音频源 Audio Source

### Audio Source

- 用于播放 `Song Clips` 的 Audio Source 组件

## ▸ 歌曲列表 Song List

- `Song Clips` 与 `Song Toggles` 在顺序上具有对应关系
- 例如：按下顺序为 `Element 3` 的 Toggle 组件后，将会播放顺序为 `Element 3` 内的 Audio Clip 资产

数组顺序 | Song Clips | Song Toggles | Toggle `SendCustomEvent` 的内容
-- | -- | -- | --
Element 0 | 歌曲 1 的 Audio Clip 资产 | 播放歌曲 1 的 Toggle 组件 | <Copy type="tip"	text="PlaySong0" toolTip="已复制" />
Element 1 | 歌曲 2 的 Audio Clip 资产 | 播放歌曲 2 的 Toggle 组件 | <Copy type="tip"	text="PlaySong1" toolTip="已复制" />
Element 2 | 歌曲 3 的 Audio Clip 资产 | 播放歌曲 3 的 Toggle 组件 | <Copy type="tip"	text="PlaySong2" toolTip="已复制" />
Element 3 | 歌曲 4 的 Audio Clip 资产 | 播放歌曲 4 的 Toggle 组件 | <Copy type="tip"	text="PlaySong3" toolTip="已复制" />
Element 4 | 歌曲 5 的 Audio Clip 资产 | 播放歌曲 5 的 Toggle 组件 | <Copy type="tip"	text="PlaySong4" toolTip="已复制" />
Element 5 | 保留为 `None (Audio Clip)` | 关闭音乐的 Toggle 组件 | <Copy type="tip"	text="PlaySong5" toolTip="已复制" />

