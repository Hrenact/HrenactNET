---
prev:
  text: '参考资料'
  link: 'E-Book/Information'
next: false
---

# 示例页面

如果预制件默认附带的 3 个页面无法满足你，你可以在 Project 窗口中的 `Assets/HrenactNET/Book/Sample Pages` 路径下找到已经预设好的页面。

## Page_Chapter

- `Chapter/Chapter_Title`：章节标题。
- `Chapter/Chapter_Page`：文章文本。

## Page

- `Page`：文章文本。

## Page_End

- `Page_End/End_Page`：文章文本。
- `Page_End/End_Author`：作者署名。

# 图像页面

如果你需要图文混排，以下预设可能会帮到你。此预设对纹理导入格式有一定需求，你可以参考 Project 窗口中 `Assets/HrenactNET/Book/Image` 路径下的`LOGO_Black_BG.png`来设定导入格式。

## ImageOnlyAuto

- `ImageOnlyAuto`：仅显示图像，比例将根据图片比例自动调整。

## Image1-1

- `Image1-1/Image`：显示图像，比例为 1：1。
- `Image1-1/Image_Page_1`：文章文本。
- `Image1-1/Image_Page_2`：文章文本。

## Image3-1

- `Image3-1/Image`：显示图像，比例为 3：1。
- `Image3-1/Image_Page`：文章文本。

## Image16-9

- `Image16-9/Image`：显示图像，比例为 16：9。
- `Image16-9/Image_Page`：文章文本。

# 注意事项

如果你使用 `Text Set Tool` 来自动填充文本，则你应该只在 `Text Components` 列表中拖入属性为 `文章文本` 的 Text 组件。