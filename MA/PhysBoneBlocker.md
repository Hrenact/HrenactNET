---
prev: false
next: false
---

# 动骨截断器 / PhysBone Blocker

![PhysBone Blocker](/images/MA/PhysBoneBlocker.png)

`PhysBone Blocker` 可以防止附加在父对象上的 PhysBone 影响子对象。它通过将子对象添加到影响父对象的任何 PhysBone 的忽略列表中来实现这一点。

## 何时应使用？

在制作某些可能希望附加到 PhysBone 链上的配件（如尾巴或耳朵）时，你可以附加一个 `PhysBone Blocker`，以防止父级 PhysBone 链影响子对象。

请注意，你仍然可以将 PhysBone 组件附加到带有 `PhysBone Blocker` 的子对象上。

## 配合 Bone Proxy 使用

在使用 [`Bone Proxy`](BoneProxy) 组件将对象附加到现有的 PhysBone 链时，附加 `PhysBone Blocker` 可以确保你的对象牢固地附着在父链上。在执行此操作时，最好将 `PhysBone Blocker` 放在拥有 `Bone Proxy` 的同一个对象上。