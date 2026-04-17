---
prev: false
next: false
---

# 独立移动 / Move Independently

<video controls width="100%">
  <source src="./video/Move-Independently.mp4" type="video/mp4">
</video>

`Move Independently` 组件允许你移动一个对象而不影响它的子对象。该组件在运行时没有效果；它仅用于编辑器中。

## 何时应使用？

此组件用于在调整模型服装的贴合度时使用。例如，你可以调整服装臀部对象的位置，而不影响其它对象的位置。

## 分组对象

通过勾选 `Objects to move together` 字段下的复选框，您可以创建一个将一起移动的对象组。例如，你可以将臀部和大腿对象一起移动，但让小腿对象保持在原位。

## 限制

虽然此组件支持独立于其子集对象来缩放对象，但不均匀的缩放（X、Y 和 Z 轴的缩放值不完全相同）并不完全支持，可能会导致意外行为。如果你需要独立调整每个轴的缩放，则应在使用 `Move Independently` 组件的同时使用 [`Scale Adjuster`](ScaleAdjuster) 组件。