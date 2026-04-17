---
prev: false
next: false
---

# 合并骨骼 / Merge Armature

![Merge Armature](/images/MA/MergeArmature.png)

`Merge Armature` 组件用于将一个 GameObject 树合并到模型的 Armature 上。

## 何时应使用？

`Merge Armature` 组件专为服装预制件设计，包括用于更新现有 Skinned Mesh Renderer 引用和最小化生成骨骼数量的特殊逻辑。如果你打算创建一个根据模型 Armature 的蒙皮网格，则应该使用它。

## 何时不应使用？

`Merge Armature` 组件并不适用于那些希望能够通用于多种不同模型的预制件。例如，它并不适合用于 finger-pen 预制件。

由于 `Merge Armature` 组件假设你所绑定的 Armature 不会移动，因此它无法应用到其它与之不同的模型。

## 设置 Merge Armature

在将 `Merge Armature` 组件添加到源 Hierarchy 的 Root 节点后，将模型所对应的骨骼（要合并到的位置）拖到 `Merge Target` 上。`Prefix` 和 `Suffix` 通常会自动设置。

## 工作原理

`Merge Armature` 将遍历它所附加的 GameObject 下的 GameObject 树，并通过名称在基础模型中搜索相对应的骨骼。为了与现有模型更好地兼容，你可以选择指定一个 `Prefix` 和/或 `Suffix`，并在寻找匹配项时将其从合并的骨骼中移除。如果找到匹配项，`Merge Armature` 将尝试重写对合并骨骼的引用，使其指向基础模型的相应骨骼。在有些情况下这是不可能的，这时候会创建一个子骨骼。如果没找到对应的骨骼，就会在相应的父骨骼下创建一个子骨骼。

`Merge Armature` 会尽力确保在源层级上配置的组件，或者指向它的组件都能顺利运行。具体来说，它会：

- 更新 Animator 引用以指向适当的位置，具体取决于被动画化的属性（例如：Transform 动画将指向合并后的骨骼，GameObject 激活动画将指向源 Hierarchy）。
- PhysBone 和 Contact 的 `Target` 字段将更新为指向新的合并后的骨骼。即使 PhysBone 不在 `Merge Armature` 组件下，也会进行此更新。
- 其他组件将保留在源 Hierarchy 中，但会生成约束以跟踪合并后的 Hierarchy。

`Merge Armature` 将会保留原始 Hierarchy 的部分内容—— 具体来说，如果它们包含除了 Transform 以外的任何组件，它们将被保留，否则通常会被删除。在必要时，PhysBone 对象的 Target 将会被更新，并且可能会创建 Parent Constraints 以确保一切正常运作。

从 Modular Avatar 1.7.0 开始，现在可以执行嵌套合并—— 也就是说，可以将 Armature A 合并到 B，然后再将 B 合并到 C。Modular Avatar 会自动确认应用这些合并的正确顺序。

## 位置同步模式 / Position Sync mode

位置锁定允许服装跟随基础头像的移动，即使在编辑模式下也能如此。这对于测试动画和姿势以及创建截图非常有用。位置锁定模式有三种选项：

- `Not locked` - 在编辑模式下，服装不会跟随基础模型移动。
- `Base =======> Target (Unidirectional)` - 当基础模型移动时，服装也会移动。然而，如果你移动服装，基础模型不会移动。这种模式会保留你对服装适配所做的任何调整，推荐用于正常使用。
- `Base <======> Target (Bidirectional)` - 当基础模型移动时，服装也会移动。如果你移动服装，基础模型也会跟着移动。这种模式适用于某些高级用例，例如创建一个预制件，用于动画化基础模型的头发或动物耳朵。

当你使用 `setup outfit` 设置一套服装时，`Position Sync mode` 将被设置为 `Base =======> Target（单向）`。如果需要，你可以在 Inspector 中更改此设置。

## 重置位置为基础模型 / Reset position to base avatar

![Reset position to base avatar](/images/MA/MergeArmatureRPTBA.png)

在安装非原本为你的模型设计的服装时，先大致将服装设置为与你的模型的姿势相匹配，然后再进行微调，会很有帮助。`Merge Armature` Inspector 中的 `Reset position to base avatar` 工具可以为你完成这一步。

当你点击 `Do It!` 时，服装中的所有骨骼位置将被设置为与模型对应的骨骼位置。你还可以使用三个附加选项：

- `Also set rotation`：将服装中所有骨骼的本地旋转设置为基础模型的旋转。这用于特殊情况；如果服装不是使用与模型相同的三维软件制作的，你可能会看到奇怪的效果。
- `Also set local scale`：将服装中所有骨骼的本地缩放设置为基础模型的缩放。这用于你已经调整过基础模型骨骼比例的情况，并希望服装与之匹配。
- `Adjust outfit overall scale to match base avatar`：将服装整体缩放调整为与模型整体匹配。此功能使用手臂长度来确定模型和服装的整体大小，并在调整任何位置之前先整体缩放服装。通常推荐在设置服装时使用此选项。

这些选项不会被保存；点击 `Do It!` 只会每次重置位置。

## 对象引用

虽然编辑器界面允许你拖入一个目标对象到 `Merge Armature` 组件，但在内部这是作为路径引用来保存的。这使得 `Merge Armature` 组件在保存为预制件后能够自动恢复其 `Merge Target`。

## 匹配骨骼名称

由于 `Merge Armature` 会尝试按名称匹配骨骼，仅仅附加它并不总是能让为一个模型设计的服装适用于另一个模型。你可以点击 `Adjust bone names to match target` 按钮来尝试将服装中的骨骼重命名以匹配当前附加的基础模型。如果你使用 `Setup Outfit` 菜单项添加了 `Merge Armature` 组件，这将会自动完成。

## 避免名称冲突 / Avoid name collisions

虽然 `Merge Armature` 会合并名称与 `Merge Target` 匹配的骨骼，但默认情况下，任何 *新添加* 且在此新合并资源中唯一的骨骼都会被更改名称。这有助于避免与其它也使用 `Merge Armature` 并可能选择了相同骨骼名称的资源发生冲突。

在某些特殊情况下，禁用此行为可能会有所帮助。在这种情况下，你可以取消选中 `Avoid name collisions` 选项。