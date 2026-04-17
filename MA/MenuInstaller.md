---
prev: false
next: false
---

# 菜单安装器 / Menu Installer

![Menu Installer](/images/MA/MenuInstaller.png)

`Menu Installer` 组件允许你轻松向模型的轮盘菜单添加菜单项。

## 何时应使用？

当你需要添加菜单项时！

## 该如何使用？

### 最终用户

默认情况下，预制件的菜单将安装在你模型轮盘菜单的顶层。如果这正是你想要的，那就完成了！否则，点击 `Select Menu` 按钮，然后双击你想要安装用来安装预制件控件的菜单。

如果所选菜单已满，它将自动拆分成多个页面（子菜单）。

如果你想完全禁用菜单安装，请点击 `Menu Installer` Inspector 左上角的禁用复选框。

### 预制件开发者

首先，创建一个轮盘菜单，并添加你想要的控件。该菜单将被 *附加* 到模型轮盘菜单树的一个选定子菜单中。因此，如果你想创建自己的子菜单，你需要创建两个菜单资源：一个用于子菜单控件，一个用于内部菜单本身。

在你的预制件中添加一个 `Menu Installer` 组件，放置在与你的 `Parameter` 组件相同的层级。然后，打开 `Prefab Developer Options` 标签，将所需的菜单添加到 `Menu to install` 中。完成！

### 菜单来源

除了安装现有的菜单资源外，通过附加 `Menu Item` 或 `Menu Group` 组件，`Menu Installer` 将根据组件的配置生成菜单项。

### 扩展其他资产的菜单

在某些情况下，扩展由另一个 `Menu Installer` 组件安装的菜单可能会很有用。这可以通过在 `Install To` 字段中指定由 `Menu Installer` 安装的菜单资源（或子菜单）来实现。