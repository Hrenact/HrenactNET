---
prev: false
next:
  text: '示例流程'
  link: 'BlendShapeEditor/Example'
---

# 插件简述

这是 Unity 编辑器拓展脚本 https://hyular.booth.pm/items/4662982 的二次分发版本，在作者以及他人的帮助下我对原始脚本进行了如下修改以使其更适用于 VRChat Avatar 项目：

- 修正工具栏位置 `Tool/BlendShapeEditor` 为 `Tools/BlendShapeEditor` ；
- 汉化脚本文本；
- 扩大 `Morph n` 与并排 UI 之间的间距；
- 为每项功能下方添加功能概括；
- 移除进行某些操作时 Blendshapes 的值会强制归零的行为;
- 添加初次打开窗口时的兼容性警告弹窗。

如果此行为侵犯到了你的权益，请在评论区联系我以进行删除。
この行為があなたの権利を侵害している場合は、コメント欄でご連絡いただければ削除いたします。

# 功能介绍

## 排序 & 重命名

![BlendShapeEditor1](/images/BlendShapeEditor/BlendShapeEditor1.png)

- 你可以通过拖动 Blendshape 旁边的拖拽条来调整顺序；
- 单击文本框即可重命名 Blendshape ；
- 单击 Blendshape 列表底部的移除按钮`-`即可移除选中的 Blendshape ；

## 创建

![BlendShapeEditor2](/images/BlendShapeEditor/BlendShapeEditor2.png)

- 创建：根据 BlendShape 列表中设定的值创建新 Blendshape ；
- 反转：为列表中的 Blendshape 创建反向形变；
- 制作动画：为列表中的多个 BlendShape 创建平滑过渡的动画；
- 创建并制作动画：根据 BlendShape 列表中设定的值创建新 Blendshape 并制作平滑过渡的动画；
- 应用形变：将当前 BlendShape 列表中设定的值应用为基础网格形变；

## 对称分割

![BlendShapeEditor3](/images/BlendShapeEditor/BlendShapeEditor3.png)

- 为你选择的 Blendshape 制作对应的仅左半部分以及右半部分的变体；
- 平滑半径：此值越大，则变体 Blendshape 带动周围网格变形的部分越多，反之亦然；

# 下载插件

https://hrenact.github.io/HrenactNET/Files/BlendShapeEditor.unitypackage