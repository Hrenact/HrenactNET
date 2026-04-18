---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Hrenact 白轭's"

  text: "个人 文档库 / Wiki 网站"
  textsuffix: ""
  tagline: Something for Nothing.

  image: 
    src: /icon.png
    alt: Hrenact

  actions:
    - theme: brand
      text: 在 Github 上查看
      link: https://github.com/Hrenact/HrenactNET
    - theme: alt
      text: AMS 购买助手
      link: Others/X1P1AMSHelper
    - theme: alt
      text: SteamVR 混搭教程
      link: SteamVRMixTutorial/Preface
    - theme: alt
      text: Unity 边角料
      link: UnitySnippet/Home
    - theme: alt
      text: BlendShapeEditor
      link: BlendShapeEditor/Description
    - theme: alt
      text: E-Book
      link: E-Book/HowToUse
    - theme: alt
      text: Modular Avatar 汉化文档
      link: MA/ModularAvatar
    - theme: alt
      text: VRC OSC Sender
      link: Others/OSCS
    - theme: alt
      text: World Menu
      link: WorldMenu/About
    - theme: alt
      text: Tracker 补电宝
      link: Others/TkBackupBattery
    - theme: alt
      text: Pico 4 / Pro 电池更换
      link: Others/P4PBattery
    - theme: alt
      text: VRChat × 郊狼
      link: Others/VRC2DGLab
    - theme: alt
      text: VRChat 录制动画
      link: Others/VRC2Anim

features:
  - icon: 🎨
    title:  AMS 购买助手
    details: 通过简单易用的工具来智能推荐最合适的拓竹 AMS 购买清单。目前仅支持 X1/P1 机型。
    link: Others/X1P1AMSHelper
    linkText: 点击查看
  - icon: 😎
    title: SteamVR 混搭教程
    details: 既想要一体机的方便又想要灯塔定位的精准？这里有最全面的设备知识和最详细的教程。
    link: SteamVRMixTutorial/Preface
    linkText: 点击查看
  - icon: 📝
    title: Unity 边角料
    details: 这里收集一些我在 Unity 开发过程中写的小工具与片段代码，可用于快速解决具体问题或验证思路。
    link: UnitySnippet/Home
    linkText: 点击查看
  - icon: 📏
    title: BlendShapeEditor
    details: 不会 Blender 又想在 Unity 内编辑和新建形态键？来试试吧！
    link: BlendShapeEditor/Description
    linkText: 点击查看
  - icon: 📖
    title: E-Book
    details: 适用于 VRChat World 且支持数据持久化的半自动电子书插件，各种模板随心用。
    link: E-Book/HowToUse
    linkText: 点击查看
  - icon: 🥼
    title: Modular Avatar 汉化文档
    details: 超火爆 VRChat Avatar 改模插件 MA 文档的汉化版，不过记得以原文为主哦。
    link: MA/ModularAvatar
    linkText: 点击查看
  - icon: 🔢
    title: VRC OSC Sender
    details: 使用 Unity 开发的 OSC 数据发送工具，界面整洁易操作。拥有预设导出导入功能。
    link: Others/OSCS
    linkText: 点击查看
  - icon: 📑
    title: World Menu
    details: 适用于 VRChat World 的世界菜单插件，模块化设计且支持数据持久化。你在找的这里都有~
    link: WorldMenu/About
    linkText: 点击查看
  - icon: 🔋
    title: Tracker 补电宝
    details: 追踪器电池老化，提前没电只好扫兴下线？快来动手做一个 Tracker 续命神器吧！
    link: Others/TkBackupBattery
    linkText: 点击查看
  - icon: 🔋
    title: Pico 4 / Pro 电池更换
    details: 头显电池老化，随时随地塞博去世？来试着自己更换电池满血复活吧！
    link: Others/P4PBattery
    linkText: 点击查看
  - icon: ⚡
    title: VRChat × 郊狼
    details: 谁说只有幻触才能满足虚拟贴贴的真实感？闲置的郊狼也能发挥出新作用，不来看看吗？
    link: Others/VRC2DGLab
    linkText: 点击查看
  - icon: 🎬
    title: VRChat 录制动画
    details: 使用 VRChat 优秀的 IK 表现录制 Unity 动画。虽然有点繁琐，但方便新手创作。
    link: Others/VRC2Anim
    linkText: 点击查看
  - icon: 🫤
    title: 暂无更多
    details: 如果想了解更多关于我的信息，不妨来看看我的社交媒体？
---

<Home />

## 第三方网站

以下网站曾在我个人的开发历程中提供重要帮助，特此致谢。作为友链，这里仅作推荐与记录之用，各网站发布的内容及观点均归其自身所有，不代表我的任何意见或立场。

<script setup>
const links = [
  {
    title: 'VRCD',
    desc: '一个面向玩家，内容创作者与开发者的 中文VR创作社区⁄开源内容分享平台。',
    link: 'https://vrcd.org.cn/',
    avatar: 'https://vrcd.org.cn/favicon.ico?favicon.5b215eb2.ico'
  },
  {
    title: '哔哩哔哩视频下载',
    desc: '用于解析 BiliBili 视频链接来获取视频直链的网站，提供下载视频和下载封面的选项。',
    link: 'https://snapany.com/zh/bilibili',
    avatar: 'https://snapany.com//favicon.ico'
  },
  {
    title: 'bili CDN列表总结',
    desc: '列出了 B 站视频使用的 CDN 类型及其对应的 URL。',
    link: 'https://www.ouo.chat/posts/default/bili_cdn',
    avatar: 'https://i.ouo.chat/favicon.ico'
  },
  {
    title: '最全UnityHub国际版下载链接Unity2023~2017各版本+Unity5.x【间歇性更新】',
    desc: '收集了各个 Unity 版本下载直链并提供下载方法的网站。',
    link: 'https://blog.csdn.net/qq_36829186/article/details/123847081',
    avatar: 'https://g.csdnimg.cn/static/logo/favicon32.ico'
  },
  {
    title: 'ncm to mp3',
    desc: '网易云音乐文件格式转换，ncm 转 mp3，批量转换，速度飞快。',
    link: 'https://www.ncm2mp3.com/',
    avatar: 'https://www.ncm2mp3.com/favicon.ico'
  },
]
</script>

<LinkGrid :links="links" />