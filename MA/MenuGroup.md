---
prev: false
next: false
---

# 菜单组 / Menu Group

![Menu Group](/images/MA/MenuGroup.png)

`Menu Group` 组件允许单个 `Menu Installer` 安装多个 `Menu Item`，而无需将它们分组到子菜单中。它主要作为内部组件，用于在转换轮盘菜单时使用。

## 何时应使用？

当你想安装多个菜单项但又不想将它们分组到子菜单时。

## 该如何使用？

`Menu Group` 组件默认会包含挂载它了的游戏对象的所有子集对象上的 `Menu Item`。 就像 `Menu Item` 的子菜单/子模式一样，你可以设置 `Source object override` 以选择不同的源对象。