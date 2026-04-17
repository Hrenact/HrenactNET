import { defineConfig } from 'vitepress'

import { figure } from '@mdit/plugin-figure'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { 
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    }, 
    ssr: { 
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
      ], 
    }, 
  }, 

  // 应用标签页图标
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
  ],

  lang: 'zh-CN',
  title: "Hrenact.NET",
  description: "个人 文档库 / Wiki 网站",
  cleanUrls: true,

  // 使用自定义域名后，不再使用子路径
  // base: '/HrenactNET/',

  markdown: {
    config: (md) => {
      md.use(figure)
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    lineNumbers: true
  },
  
  appearance: 'force-dark',
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // footer: {
    //   message: 'Released under the CC BY-NC-SA 4.0 License.',
    //   copyright: 'Copyright © 2024-present Hrenact'
    // },

    search: {
      provider: 'local'
    },

    nav: [
      { text: '返回主页', link: '/' },
      { text: '社交媒体', items: [
          { text: 'GitHub', link: 'https://github.com/Hrenact'},
          { text: 'VRChat', link: 'https://vrchat.com/home/user/usr_e6044ad7-4283-430a-987d-77c709f58ae7'},
          { text: 'Booth', link: 'https://hrenact.booth.pm/'},
          { text: 'BiliBili', link: 'https://space.bilibili.com/2009759834'},
          { text: 'X (Twitter)', link: 'https://x.com/Hrenact'},
        ]
      },
    ],

    outline: {
      level: [1, 6],
      label: '页面大纲'
    },

    sidebar: [
      {
        text: '杂项',
        items: [
          { text: 'X1P1 AMS 购买助手', link: 'Others/X1P1AMSHelper' },
          { text: 'VRC OSC Sender', link: 'Others/OSCS' },
          { text: 'Tracker 补电宝', link: 'Others/TkBackupBattery' },
          { text: 'Pico 4 / Pro 电池更换', link: 'Others/P4PBattery' },
          { text: 'VRChat × 郊狼', link: 'Others/VRC2DGLab' },
          { text: 'VRChat 动画录制', link: 'Others/VRC2Anim' },
        ]
      },
      {
        text: 'Unity 边角料',
        items: [
          { text: '概述', link: 'UnitySnippet/Home' },
          { text: '分类', link: 'UnitySnippet/Classis',
            collapsed: true,
            items: [
              { text: 'Editor Tools', link: 'UnitySnippet/EditorTools'},
              { text: 'Runtime Behaviour', link: 'UnitySnippet/RuntimeBehaviour'},
              { text: 'Shader / Rendering', link: 'UnitySnippet/ShaderRendering'},
            ]
          }
        ]
      },
      {
        text: 'SteamVR 混搭教程',
        items: [
          { text: '文章前言', link: 'SteamVRMixTutorial/Preface' },
          { text: '准备工作', link: 'SteamVRMixTutorial/Preparation' },
          { text: '调试基站', link: 'SteamVRMixTutorial/BaseStation' },
          { text: '添加设备', link: 'SteamVRMixTutorial/AddDevice' },
          { text: '校准设备', link: 'SteamVRMixTutorial/CalibrateDevice' },
        ]
      },
      {
        text: 'BlendShape Editor',
        items: [
          { text: '插件介绍', link: 'BlendShapeEditor/Description' },
          { text: '示例流程', link: 'BlendShapeEditor/Example' },
        ]
      },
      {
        text: 'E-Book',
        items: [
          { text: '使用方法', link: 'E-Book/HowToUse' },
          { text: '参考资料', link: 'E-Book/Information' },
          { text: '示例页面', link: 'E-Book/SamplePage' },
        ]
      },
      {
        text: 'World Menu 文档',
        items: [
          { text: '关于 World Menu', link: 'WorldMenu/About' },
          { text: '组件参考', link: 'WorldMenu/ComponentReference',
            collapsed: true,
            items: [
              { text: 'Summon World Menu', link: 'WorldMenu/SummonWorldMenu' },
              { text: 'Page Manager', link: 'WorldMenu/PageManager' },
              { text: 'Home', link: 'WorldMenu/Home' },
              { text: 'Player Log', link: 'WorldMenu/PlayerLog' },
              { text: 'Teleport System', link: 'WorldMenu/TeleportSystem' },
              { text: '持久化组件', link: 'WorldMenu/PersistentComponent',
                collapsed: true,
                items: [
                  { text: 'Persistent Toggle', link: 'WorldMenu/PersistentComponent/PersistentToggle' },
                  { text: 'Persistent Volume', link: 'WorldMenu/PersistentComponent/PersistentVolume' },
                  { text: 'Music Manager', link: 'WorldMenu/PersistentComponent/MusicManager' },
                ]
               },
            ]
          },
        ]
      },
      {
        text: 'Modular Avatar 汉化文档',
        items: [
          { text: '什么是 MA', link: 'MA/ModularAvatar' },
          { text: '组件参考', link: 'MA/ComponentReference',
            collapsed: true,
            items: [
              { text: '反应式组件', link: 'MA/ReactiveComponents',
                collapsed: true,
                items: [
                  { text: 'Reaction Debugger', link: 'MA/ReactiveComponents/ReactionDebugger' },
                  { text: 'Material Setter', link: 'MA/ReactiveComponents/MaterialSetter' },
                  { text: 'Material Swap', link: 'MA/ReactiveComponents/MaterialSwap' },
                  { text: 'Mesh Cutter', link: 'MA/ReactiveComponents/MeshCutter',
                    collapsed: true,
                    items: [
                      { text: 'Vertex Filter - By Axis', link: 'MA/ReactiveComponents/MeshCutter/VFbyAxis' },
                      { text: 'Vertex Filter - By Bone', link: 'MA/ReactiveComponents/MeshCutter/VFbyBone' },
                      { text: 'Vertex Filter - By Mask', link: 'MA/ReactiveComponents/MeshCutter/VFbyMask' },
                      { text: 'Vertex Filter - By Blendshape', link: 'MA/ReactiveComponents/MeshCutter/VFbyBlendshape' },
                    ]
                  },
                  { text: 'Object Toggle', link: 'MA/ReactiveComponents/ObjectToggle' },
                  { text: 'Shape Changer', link: 'MA/ReactiveComponents/ShapeChanger' },
                ]
              },
              { text: 'Blendshape Sync', link: 'MA/BlendshapeSync' },
              { text: 'Bone Proxy', link: 'MA/BoneProxy' },
              { text: 'Convert Constraints', link: 'MA/ConvertConstraints' },
              { text: 'Menu Group', link: 'MA/MenuGroup' },
              { text: 'Menu Install Target', link: 'MA/MenuInstallTarget' },
              { text: 'Menu Installer', link: 'MA/MenuInstaller' },
              { text: 'Menu Item', link: 'MA/MenuItem' },
              { text: 'Merge Animator', link: 'MA/MergeAnimator' },
              { text: 'Merge Armature', link: 'MA/MergeArmature' },
              { text: 'Merge Motion (Blend Tree)', link: 'MA/MergeMotion' },
              { text: 'Mesh Settings', link: 'MA/MeshSettings' },
              { text: 'MMD Layer Control', link: 'MA/MMDLayerControl' },
              { text: 'Move Independently', link: 'MA/MoveIndependently' },
              { text: 'Parameters', link: 'MA/Parameters' },
              { text: 'PhysBone Blocker', link: 'MA/PhysBoneBlocker' },
              { text: 'Remove Vertex Color', link: 'MA/RemoveVertexColor' },
              { text: 'Rename VRChat Collision Tags', link: 'MA/RenameVRCCollisionTags' },
              { text: 'Replace Object', link: 'MA/ReplaceObject' },
              { text: 'Scale Adjuster', link: 'MA/ScaleAdjuster' },
              { text: 'Visible Head Accessory', link: 'MA/VisibleHeadAccessory' },
              { text: 'World Fixed Object', link: 'MA/WorldFixedObject' },
              { text: ' World Scale Object', link: 'MA/WorldScaleObject' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hrenact/HrenactNET' }
    ]
  }
})
