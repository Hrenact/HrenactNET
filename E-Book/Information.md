---
prev:
  text: '使用方法'
  link: 'E-Book/HowToUse'
next:
  text: '示例页面'
  link: 'E-Book/SamplePage'
---

# 预制件层级

预制件本身进行了一定的分类管理，使其观感更加舒适，也便于制作变体。

![Prefab](/images/E-Book/Prefab.png)

编号 | 名称 | 用途
-- | -- | --
1 | Background/EditorOnly_Background | 制作页面时的辅助背景，在上传或运行时会自动删除。
2 | Book_Title | 电子书的书名。
3 | Put_Pages_Inside_ME | 存放书本的所有页面。

# 预制件脚本

预制件默认附带已经设定好的脚本，你可以开箱即用。如果你想高度自定义，下方也列出了每个部件的用途，供参考。

![PrefabScript](/images/E-Book/PrefabScript.png)

编号 | 名称 | 用途
-- | -- | --
1 | Book_Page_Key | 持久化时使用的键值，请确保每本电子书都使用不同的值，并且与其它支持持久化数据的脚本的值没有冲突。
2 | Book Pages | 书本页面列表，列表中的顺序应与书本层级 Inspector 中`Put_Pages_Inside_ME`内的实际页面顺序一致。
3 | Previous Page | 按下时显示上一页的按钮（string`OnClickPreviousPage`）。
4 | Next Page | 按下时显示下一页的按钮（string`OnClickNextPage`）。
5 | First Page | 按下时回到第一页的按钮（string`OnClickFirstPage`）。
6 | Page Slider | 拖动来切换页面的滑动条。
7 | Page Number | 显示当前页面以及总页数的文本。
8 | Lock Button | 打开或关闭 Pickup 的按钮（string`_LockButtonToggle`）。
9 | Pickup State | 显示 Pickup 状态的图像。
10 | Pickup Enabled Sprite | 当 Pickup 开启时显示的精灵图。
11 | Pickup Disabled Sprite | 当 Pickup 关闭时显示的精灵图。

> [!NOTE]
> `Book_Sample_Persistence.prefab`使用的脚本为`BookPersistence.cs`。与`Book_Sample.prefab`使用的`Book.cs`不同的是，此脚本支持数据持久化，它将自动保存你翻阅到的页面并在下次进入世界时加载。

# Text Set Tool

此 Unity 编辑器拓展脚本一定程度上简化了大量文本需要添加时的复杂程度，允许你自动化填充文本。

你可以在 Unity 窗口的顶栏`Tools/HrenactNET/Text Set Tool`打开它。

![OpenEditorScript](/images/E-Book/OpenEditorScript.png)

## 界面介绍

![EditorScript](/images/E-Book/EditorScript.png)

编号 | 名称 | 用途
-- | -- | --
1 | Full Text: | 将被自动填充的文本。如果使用导入 *.txt 文件，此处将显示文件内的文本。
2 | Load Text from *.txt File (UTF-8) | 选择你需要自动生成的 *.txt 文本文件。
3 | Is Set Texts Color | 如果勾选此复选框，则自动设定`Text Components`列表中`Text`组件的颜色。
4 | Text Color | 自动设定`Text`组件的目标颜色。
5 | Text Components | 将被自动填充的`Text`组件列表，列表中的顺序应对应书本实际的`Text`组件顺序。
6 | Start Fill Text | 按下后将把`Full Text`中的文本按`Text Components`中的顺序依次填入`Text`组件中。

如果在你按下`Start Fill Text`后没有反应，请检查 Unity 控制台是否拥有提示信息输出，如下图所示：

![Console](/images/E-Book/Console.png)

> [!NOTE]
> 当`Full Text:`于活跃状态（输入框边框为蓝色）时，`Load Text from *.txt File (UTF-8)`将会失效。你可以通过点击其它窗口来解除活跃状态。