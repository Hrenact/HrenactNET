---
prev: false
next: false
---

# 菜单项 / Menu Item

![Menu Item](/images/MA/MenuItem.png)

`Menu Item` 组件允许你在 Unity Hierarchy 中定义一个轮盘菜单项。

## 何时应使用？

该组件可以比定义 VRC Expressions Menu 资源提供更方便的方式来编辑和定义菜单项。你可以通过在层级中拖放来移动菜单项，并且它提供了一个编辑器界面，可以识别 MA [`Parameters`](Parameters) 组件上定义的参数名称。

## 该如何使用？

`Menu Item` 组件定义了更大的菜单中的单个菜单项。您可以为菜单项配置图标、菜单类型和参数。菜单项的名称将取自其挂载的游戏对象的名称。这使您可以在层级视图中直接查看菜单项的名称并重命名它们。

### 子菜单

当菜单项被设置为子菜单时，您可以配置子菜单的来源。您可以将 `Submenu Source` 设置为 `Expressions Menu Asset`，并配置一个传统的 VRC Expressions Menu 资源以供引用，或者您可以将 `Submenu Source` 设置为 `Children`，这种情况下，附加在该菜单项直接子集上的 `Menu Item` 将用于填充子菜单。

如果子菜单中的项目数量超过 VRC 菜单的最大项目数，将会自动创建一个“next”项目以分割菜单。

当子菜单来源为子集时，您还可以指定一个 `Source Object Override`。如果设置了该项，将使用该对象的子集，而不是菜单项的直接子集。

### 绑定子菜单

为了确定菜单项在菜单中的位置，需要另一个组件将其绑定到菜单。有三种方法可以实现这一点：

- 通过 `submenu` 或 `children` 模式，可以将 `Menu Item` 设置为另一个 `Menu Item` 的子项。
- `Menu Item` 可以与 [`Menu Installer`](MenuInstaller) 组件位于同一个游戏对象上。
- `Menu Item` 可以是 [`Menu Group`](MenuGroup) 对象的子项（通常此对象位于带有 `Menu Installer` 组件的游戏对象上）。

未绑定的菜单项不会产生任何效果。

### 自动创建参数

当你指定一个在 MA [`Parameters`](Parameters) 组件或 VRC Expressions Parameter 资产中未声明的参数名称时，`Menu Item` 会自动为你创建一个参数。发生这种情况时，你会看到一些复选框，用于控制值是否被保存/同步。

![Automatic Parameter Creation](/images/MA/MenuItemAPC.png)

如果你勾选 `Is Default`，此菜单项将被设置为该参数的默认值。如果有多个菜单项勾选了 `Is Default`，结果将无法预测。请不要这样做！

如果你的菜单项没有设置参数名称，你仍然会看到这些选项；如果此菜单项有控制任何的反应式组件对象，将会创建一个参数。