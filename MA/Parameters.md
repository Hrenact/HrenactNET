---
prev: false
next: false
---

# MA 参数 / MA Parameters

![MA Parameters](/images/MA/MAParameters.png)

`MA Parameters` 组件允许你定义你的噱头所使用的 Animator 参数，无论是内部使用，还是用于与其他组件的通信。它会重命名参数以避免冲突，并定义同步和不同步的 Animator 参数及其默认值。

## 何时应使用？

当你在构建一个使用除 VRChat 内置 Animator 参数之外的小噱头时，应使用 `MA Parameters` 组件。

## 该如何使用？

`MA Parameters` 列表中的每一项配置一个单独的参数，或用于 VRChat PhysBone 的前缀。您可以在顶部输入行设置名称（或前缀），并在旁边设置参数类型。

### 参数类型

右上角的参数类型字段可以设置为以下任意一种：

- `Bool`
- `Int`
- `Float`
- `Animator Only`
- `PB Prefix`

如果你选择 `Animator Only`，该参数将不会添加到 `Expressions Parameters list` 中。然而，仍然可以按照下面的描述重命名相关参数。

`PB Prefix` 设置用于在 PhysBones 组件中设置此参数前缀时使用。与 `Animator Only` 一样，该参数不会被添加到 `Expressions Parameters list` 中。

### 重命名参数

如果你在 `Change name to` 字段中输入一个名称，该参数在 `MA Parameters` 对象及其子对象 *之外* 的任何地方都会被重命名为该名称。这对于避免不同噱头之间的冲突非常有用，或者相反，通过让两个不同的噱头使用相同的参数，可以有意地将它们连接起来。

你还可以勾选 `Auto rename` 框来让 Modular Avatar 自动为你选择一个未使用的名称。

### 默认值 / Default Value

你可以为每个参数设置默认值。当你的模型被重置时，将会使用该值。如果将默认框留空，则会使用主 Expressions Parameters 资源中的值（如果有），否则将使用 0（或 False）。

如果你勾选了 `Override Animator Defaults`，那么你资源的 *Animator Controller* 中指定的任何默认值都将被更改为此默认值。这在处理特别复杂的噱头时可能很有用。如果你选择了 `Animator Only` 并指定了默认值，那么此选项将被忽略，并且 Animator Controller 的默认值将始终被替换。

### 已保存/已同步 / Saved/Synced

`Saved` 选项控制该参数的值是否会在更换头像和重启 VRChat 时被保留。

`Synced` 选项控制该参数是否会在网络中同步。如果取消选中此选项，该参数将不会占用你有限的参数空间。

### 创建新参数

您可以通过两种不同的方式定义一个新参数。首先，您可以点击参数列表底部的 `+` 按钮；然后点击参数旁边的箭头图标以设置其名称。

其次，你可以展开 `Unregistered Parameters` 部分；该部分列出了在此 GameObject 及其子集对象中的组件中检测到的参数。你可以点击 `Add` 按钮来添加该参数，或点击放大镜查看参数被检测到的位置。

无论哪种方式，在创建参数后，点击新参数旁边的箭头展开详细视图。在那里，你可以设置参数类型（例如控制参数是否同步）以及参数的其它属性。

### 嵌套

`MA Parameters` 组件可以被嵌套。这允许你通过多个子集组件构建一个复杂的系统。每个 `MA Parameters` 组件都可以对其所有子集组件应用重命名。这意味着，如果你有一个内部 `MA Parameters` 将 “foo” 重命名为 “bar”，而外部 `MA Parameters` 将 “bar” 设置为 `Auto rename`，你仍然可以访问中间对象中的 “bar”。

在嵌套组件时，有一些值得注意的细节：

- `Saved` 参数将采用最外层的 `Saved` 设置。但是，当多个未嵌套的 `MA Parameters` 组件将 `Saved` 设置为不同的值时，只要有任意一个组件设置为保存，该参数就会被保存。
- `Default Value` 字段将采用最外层的设置；但是，如果外层组件的默认值为空，则使用最内层的非空默认值。如果多个未嵌套的组件设置了非空默认值，将会显示警告，因为无法确定应使用哪一个。