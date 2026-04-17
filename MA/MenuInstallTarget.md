---
prev: false
next: false
---

# 菜单安装目标 / Menu Install Target

![Menu Install Target](/images/MA/MenuInstallTarget.png)

`Menu Install Target` 组件是一个用于支持 [MA Menu Installer](MenuInstaller) 组件上 `Select Menu` 按钮的组件。它会从 MA `Menu Installer` 组件中“提取”菜单，并根据其所附游戏对象的位置进行安装。

## 何时应使用？

当你在 [MA Menu Installer](MenuInstaller) 组件上使用 `select menu` 按钮时，Modular Avatar 会在必要时创建此组件。在大多数情况下，无需手动创建它。

## 工作原理

此组件将覆盖所选 `Menu Installer` 上的目标菜单选项；`Menu Installer` 将表现得就像是其菜单已被复制粘贴到 `Menu Install Target` 的位置。这允许使用 `Menu Installer` 的预制件集成到基于对象的菜单系统中。