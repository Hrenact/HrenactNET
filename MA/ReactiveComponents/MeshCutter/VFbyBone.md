---
prev: false
next: false
---

# 顶点过滤器 - 按骨骼 / Vertex Filter - By Bone

![Vertex Filter - By Bone](/images/MA/ReactiveComponents/MeshCutter/VFbyBone.png)

`Vertex Filter - By Bone` 是一个 Vertex Filter 组件，通过配合 [Mesh Cutter]()，可以让你根据部分网格的骨骼权重来选择删除或隐藏。

## 设置 Vertex Filter - By Bone

`Vertex Filter - By Bone` 必须附加到具有 `Mesh Cutter` 组件的游戏对象上。你可以通过点击 Mesh Cutter 组件上的 `Add Vertex Filter...` 按钮来添加过滤器，或者手动添加 `Vertex Filter - By Bone` 组件。

### 配置

- `Target Bone`：选择你想进行过滤的骨骼 Transfrom，将只考虑与该骨骼有关的顶点。
- `Weight Threshold`：设置顶点被选中所需的最小骨骼权重（0.0 到 1.0）。对于 `Target Bone`，权重等于或高于该阈值的顶点将被筛选出来。
- - 骨骼权重在与阈值比较前会先进行归一化。

### 工作原理

过滤器会检查每个顶点的骨骼权重，并选择对指定的骨骼权重大于或等于阈值的顶点。这样可以根据骨骼绑定对网格的受影响部分进行精确控制。

例如：

- 将阈值设置为 0.01 将选择对骨骼有任何权重的顶点
- 将阈值设置为 0.5 将只选择主要受骨骼控制的顶点
- 将阈值设置为 1.0 将只选择完全受骨骼控制的顶点

注意：此过滤器仅适用于具有骨骼权重数据的 Skinned Mesh Renderers。它对 Mesh Renderer 或没有骨骼权重的网格无效。