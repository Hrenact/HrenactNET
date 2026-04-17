---
prev: false
next:
  text: '参考资料'
  link: 'E-Book/Information'
---

# 简介

这是一个用于 VRChat World 的简易电子书插件，具有一定的半自动化功能。

前往左侧的网址来下载文件：https://hrenact.booth.pm/items/6306337

# 如何使用

## 导入插件

1. 点击页面中下方图示的按钮来下载最新版本；

![Download](/images/E-Book/Download.png)

2. 解压缩下载好的 *.zip 文件，得到 HrenactsNET_Book.unitypackage 文件；
3. 打开你的 VRChat World Unity 工程，并确保 VRChat SDK - Worlds 版本为 3.7.4 或更高；
4. 双击 HrenactsNET_Book.unitypackage 后转到 Unity 窗口，检查无误后导入；

![Import](/images/E-Book/Import.png)

## 拖入场景

1. 在 Project 窗口中转到路径 `Assets/HrenactNET/Book/Prefabs`；

![SelectPrefab](/images/E-Book/SelectPrefab.png)

2. 选择合适的 *.prefab 预制件，拖入 Hierarchy 中；

> [!NOTE]
> - 名称内带有 `Persistence` 则意味着支持数据持久化，重新进入地图时将继续显示上次阅读到的页面；
> - 名称内带有 `Dark` 则意味着为暗色主题。

3. 选中刚刚拖入的物体，调整 Inspector 中 Transform 组件的值为合适的值；
4. 在 Unity 内测试无问题后，上传你的世界。

## 添加页面

1. 在 Project 窗口中转到路径 `Assets/HrenactNET/Book/Sample Pages`，选择合适的页面预制件并拖入 Hierarchy 路径 `Book Root/BookUI/Put_Pages_Inside_ME` 下；

![Book1](/images/E-Book/Book1.png)

2. 按照页面顺序，依次拖入 `Book Root` 中的 `Book (Script)` 或 `Book Persistence (Script)` 组件的 `Book Pages` 列表内：`Element 0` 即对应书本的第一页，`Element 1` 对应书本的第二页，`Element 2` 对应书本的第三页，以此类推。

![Scrpit1](/images/E-Book/Scrpit1.png)

## 修改文本

1. 在 Hierarchy 中完整展开物体路径；
2. 修改 `Book Root/BookUI/Book_Title` 物体 Text 组件中的文本为书名；
3. 修改父级 `Book Root/BookUI/Put_Pages_Inside_ME` 下所有物体 Text 组件中的文本为文章内容。

如果你拥有 *.txt 格式的文件，你也可以使用 Unity 编辑器拓展脚本来自动填入文本。

1. 前往 Unity 窗口的顶栏 `Tools/HrenactNET/Text Set Tool` 来打开界面；

![OpenEditorScript](/images/E-Book/OpenEditorScript.png)

2. 点击 `Load Text from *.txt File (UTF-8)` 来打开文件选择页面。读取成功后，`Full Text:` 下方的输入框将显示文件内的文本；

![OpenFile](/images/E-Book/OpenFile.png)

3. 按照你在 `Book Pages` 中设定的顺序，依次拖入 `Text Components` 列表中；

![Book2](/images/E-Book/Book2.png)

![Scrpit2](/images/E-Book/Scrpit2.png)

4. 点击 `Start Fill Text` 按钮，脚本将按照 `Text Components` 列表中的顺序自动填入文本。

> [!NOTE]
> 如果你使用的是 `Dark` 暗色主题预制件，你也可以勾选 `Is Set Texts Color` 复选框，脚本在自动填充文本时也会自动设定文本颜色为合适的颜色。