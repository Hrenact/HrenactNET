---
prev: false
next: false
---



# VRChat × 郊狼 - 互动反馈教程

*以“触碰 Avatar → 现实设备产生反馈”为例*

本教程将通过一个简单示例，演示如何使用 **Shocking VRChat**，让你的 VRChat Avatar 在被触碰时，触发现实中的 **DG-LAB（郊狼）电击反馈**。

- 示例效果：
- 当有人触碰你的 Avatar 指定部位（如大腿），DG-LAB 会根据触碰强度或是否接触，输出对应的刺激波形。

## 实现原理（先理解在干嘛）

整个流程可以概括为四步：

1. **VRChat Avatar**
    - 使用 `VRC Contact Receiver` 检测是否被触碰
    - 将触碰状态写入 Avatar 的 OSC 参数

2. **Shocking VRChat**
    - 通过 VRChat 的 **OSC** 接口监听这些参数变化

3. **DG-LAB App**
    - Shocking VRChat 通过 **Socket** 协议向手机端 DG-LAB 发送波形数据

4. **现实反馈**
    - DG-LAB 根据接收到的波形输出刺激
    - 你：⚡

## 准备工作

### 下载 Shocking VRChat

1. 打开项目主页：<br>https://github.com/VRChatNext/Shocking-VRChat
2. 进入 `Releases` 页面
3. 下载最新版：<br>`shocking_vrchat-xxx-windows-amd64.zip`
4. 解压到一个**你记得住的路径**

### 首次运行并生成配置文件

1. 双击运行 `shocking_vrchat.exe`
2. 程序会 **立即退出**（这是正常现象）
3. 在目录中会生成两个配置文件：
    - `settings-v0.2.yaml`（主要配置）
    - `settings-advanced-v0.2.yaml`（高级配置）

::: tip
若弹出 Windows 防火墙控制界面，允许即可。
:::

### 认识配置文件

#### 基础配置（settings-v0.2.yaml）

这个文件决定了：

- 监听哪些 Avatar 参数
- 用什么方式触发
- 最大输出强度是多少

**示例说明**

``` yaml
# 在这个示例配置文件中，我们实现了：
# - 通道 A：轻轻接触 左腿/左胳膊 时，以不足 5 的强度微微刺激，当触摸距离越来越近时，强度逐渐上升，直到最大强度 25 为止。
# - 通道 B：只要有人碰到 小穴/屁眼（不区分轻重），都会以 20 的强度持续输出刺激，直到停止接触。

dglab3:
  channel_a:    # 通道 A 监听的 Avatar OSC 参数
    avatar_params:
    - /avatar/parameters/DGLAB/LeftLeg
    - /avatar/parameters/DGLAB/LeftArm
    # 如果要添加更多参数，需要带上“- /avatar/parameters/”前缀
    mode: distance    # 工作模式，distance 对应 VRC Contact Receiver 组件里的 Reciever Type: Proximity，即参数类型为 Float
    strength_limit: 25    # 当上方 avatar_params 里的 float 值为 1 时的强度（最大强度），线性关系
  channel_b:    # 通道 B 监听的 AVatar OSC 参数
    avatar_params:
    - /avatar/parameters/Pussy
    - /avatar/parameters/AssHole
    # 如果要添加更多参数，需要带上“- /avatar/parameters/”前缀
    mode: shock    # 工作模式，shock 对应 VRC Contact Receiver 组件里的 Reciever Type: Constant，即参数类型为 Bool
    strength_limit: 20    # 当上方 avatar_params 里的 Bool 值为 1 时的输出强度
version: v0.2
```

**模式说明**

mode | 适用参数类型 | 行为
-- | -- | --
`distance` | `Float` | 根据接触深度变化强度
`shock` | `Bool` | 只要接触就触发固定强度

#### 高级配置（settings-advanced-v0.2.yaml）

::: warning
本文件内容较多，这里只解释**关键且常用部分**
:::

``` yaml
# ......
dglab3:
  channel_a:    # 通道 A 的配置项
    mode_config:    # 工作模式配置
      distance:    # distance 模式的配置项
        freq_ms: 10    # 对应 DG-LAB “编辑波形”里的“脉冲频率”，这个值不会随着触摸深度而改变
      shock:    # shock 模式的配置项
        duration: 2    # 当停止触摸时，延长电击多久（单位：秒）。最小值为 1，不允许小数
        wave: '...'    # 电击波形 ps:说实在的我真的没搞懂这个该怎么编辑
# ......
  channel_b:    # 通道 A 的配置项
    mode_config:    # 工作模式配置
      distance:    # distance 模式的配置项
        freq_ms: 10    # 对应 DG-LAB “编辑波形”里的“脉冲频率”，这个值不会随着触摸深度而改变
      shock:    # shock 模式的配置项
        duration: 2    # 当停止触摸时，延长电击多久（单位：秒）。最小值为 1，不允许小数
        wave: '...'    # 电击波形 ps:同样的，我也没搞懂这个该怎么编辑
# ......
general:
  auto_open_qr_web_page: true    # 打开软件的同时在浏览器里打开二维码页面。用于在 DG-LAB 的 SOCKET控制 中扫码连接服务器。 
# ......
osc:    # OSC 的监听地址和端口
  listen_host: 127.0.0.1    # 监听地址
  listen_port: 9001    # 监听端口
# ......
web_server:    # 二维码页面的访问地址和端口
  listen_host: 127.0.0.1    # 访问地址
  listen_port: 8800    # 访问端口
# ......
```

## 实践教程

### 添加 VRC Contact Receiver

以 **左腿** 为例：

1. 在 Avatar 的 `Hierarchy` 中选中：<br>`UpperLeg_L`
2. 在 `Inspector` 中点击 **Add Component**
3. 添加 **VRC Contact Receiver**

### 调整 Receiver 形状

``` yaml
Shape
    Shape Type: Capsule    # 修改接收器形状为圆柱体
    # 下方参数请根据实际情况调整
    Radius: 0.5    # 用于调整接收器的半径
    Height: 2    # 用于调整接收器的高度
    Position: X Y Z    # 用于调整接收器的坐标
    Rotation: X Y Z    # 用于调整接收器的角度
```
::: tip
建议稍微做大一点，方便测试和触发
:::

### 设置触发来源

``` yaml
Filtering
    Allow Self: √    # 如果勾选，则对自己的触摸做出反应
    Allow Others: √    # 如果勾选，则对他人的触摸做出反应
    Local Only: ×    # 用不到，保持默认即可
```

### 设置允许触碰的部位

``` yaml
# 允许对哪些部位的触摸做出反应，
# 例如：添加 `Head` 代表当他人或自己的 头部 触碰到接收器时，你会挨电。

Collision Tags
# ———————— Tag 翻译 ————————
    Head    # 头部
    Torso    # 躯干
    Hand    # 手掌
    Foot    # 脚部
    Finger    # 手指
# ———————— Tag 顺序没有影响 ————————
```

::: tip
建议同时添加 `Hand` + `Finger`<br>
否则可能会出现“手指戳了但没反应”的情况
:::

### 设置 Receiver 的类型与参数名

- 设置 `Receiver Type` 和 `Parameter`
  - 将 `Receiver Type` 设为 `Proximity`
  - 将 `Parameter` 设为 `DGLAB/LeftLeg`

``` yaml
Receiver
    Receiver Type: Proximity
    Parameter: DGLAB/LeftLeg    # 参数名称，请确保这个名称不会重复使用。用于填入 avatar_params。
```

**Receiver Type 对照表**

类型 | 参数 | 用途
-- | -- | --
`Constant` | `Bool`	| - 只判断是否接触<br>- 没有接触时值为 0，接触后为 1<br>- 搭配 `shock` 工作模式使用
`Proximity`	| `Float`	| - 根据接触深度变化<br>- 刚接触时值很小（0.01），越深值越大，最大为 1<br>- 搭配 `distance` 工作模式使用

### 添加 Expression Parameters

在 Avatar 的 **Expression Parameters** 中新增：

Name | Type | Default | Saved | Synced
-- | -- | -- | -- | --
DGLAB/LeftLeg | Float | 0 | × | √

### 右腿同理

- 参考上述步骤，为 `UpperLeg_R` 执行同样的步骤。
- 对于 `Parameter`，请修改为 `DGLAB/RightLeg`

### 修改配置文件

- 根据你刚刚添加的参数 `Parameter`，同步修改 `settings-v0.2.yaml`

``` yaml
# 在这里，我们设定了：
# 通道 A：触摸左腿时输出波形，越深强度越高，最大 20
# 通道 B：触摸右腿时输出波形，越深强度越高，最大 20

dglab3:
  channel_a:
    avatar_params:
    - /avatar/parameters/DGLAB/LeftLeg
    mode: distance
    strength_limit: 20
  channel_b:
    avatar_params:
    - /avatar/parameters/DGLAB/RightLeg
    mode: distance
    strength_limit: 20
version: v0.2
```

### 上传与测试

**VRChat 端**

1. 上传并使用修改后的 Avatar
2. 打开 OSC：<br>`轮盘菜单` > `选项` > `OSC` > `已开启`

**启动 Shocking VRChat**

1. 运行 `shocking_vrchat.exe`
2. 浏览器会自动打开二维码页面

**连接 DG-LAB**

1. 打开手机 **DG-LAB App**
2. 进入 `SOCKET控制`
3. 点击 `连接服务器`
4. 使用相机扫描浏览器中的二维码

**测试**

- 让自己或朋友触碰 Avatar 的左腿/右腿
- 若 DG-LAB 中的 通道A/通道B 出现波形输出且随着深度逐渐升高强度
- 大功告成~

## 疑难解答

### Q: 教程有点难懂，有现成的预制件吗？

**A：有的，在 Booth 上。**

如果你不想从零开始手动配置，可以直接使用已经制作好的预制件。

详细介绍、功能说明和使用方法，请查看 Booth 商品页面：<br>
https://hrenact.booth.pm/items/7979151

### Q: 我在用面捕或其他 OSC 设备，会和 Shocking VRChat 冲突吗？

**A：会，这是正常现象。**

原因在于：<br>
**VRChat 的 OSC 端口（默认 `9001`）同一时间只能被一个程序监听**。<br>
当你同时运行多个 OSC 软件（例如 VRCFaceTracking + Shocking VRChat）时，就会出现端口占用的问题。<br>

解决方法也很简单：<br>
使用一个 **OSC 转发器**，把 VRChat 发出的 OSC 数据转发给多个程序。

推荐工具：**osc-repeater**

**下载 osc-repeater**

1. 打开项目主页：<br>https://github.com/CyCoreSystems/osc-repeater
2. 进入 `Releases` 页面
3. 下载最新版：<br>`osc-repeater_xxx_windows_amd64.exe`
4. 将该 `exe` 文件放到一个**你记得住路径的文件夹**中<br>（后面要在这个文件夹里放配置文件）

**创建配置文件**

1. 在 `osc-repeater.exe` 所在文件夹中
2. 新建一个 <Copy type="tip" text="config.yaml" toolTip="已复制" /> 文件
3. 粘贴以下内容至文件：

``` yaml
listenPorts:    # osc-repeater 要监听的端口
  - 9001    # VRChat 默认的 OSC 输出端口
targets:    # 转发目标：把收到的 OSC 数据发到哪些端口
  - "127.0.0.1:9011"
  - "127.0.0.1:9021"
  # - "127.0.0.1:9031"
  # 将 OSC 数据复制并转发到这些端口
  # 每个端口只能被一个程序使用
```

**修改各软件的监听端口**

对于 VRCFaceTracking：

- 转到设置项：<br>`侧边栏` > `设置` > `OSC Address`
- 修改 `Receive Port` 为 <Copy type="tip" text="9011" toolTip="已复制" />

对于 Shocking VRChat：

- 打开配置文件 `settings-advanced-v0.2.yaml` 并修改

``` yaml
# ......
osc:
  listen_host: 127.0.0.1
  listen_port: 9021
# ......
```

**启动顺序与最终效果**

推荐启动顺序：

1. 启动 **osc-repeater**
2. 启动 **VRChat**
3. 启动 **VRCFaceTracking**、**Shocking VRChat** 等 OSC 软件

此时，OSC 数据的流向如下：

```
VRChat (9001)
    ↓
osc-repeater
    ↓
   9011 → VRCFaceTracking
   9021 → Shocking VRChat
   ...
```

只要记住 **先启动 osc-repeater**，之后再使用任意 OSC 软件，就可以避免端口冲突问题。

### Q: 可以做到被插入时进行电击的效果吗？

**A: 可以，需要 PCS。**

为什么必须使用 PCS？<br>
简单来说：
- **SPS / DPS 本身不提供“插入状态”和“力度变化”的参数**
- 它们无法告诉你：
  - 是否正在被插入
  - 插入力度是多少

而 PCS 为了实现自身的相关效果，提供了一个可读取的参数：<br>
`pcs/contact/slide-in`

这个参数是一个 **Float 类型**：

- 未接触时：接近 0
- 接触越深入：数值越接近 1

这正好可以被 Shocking VRChat 的 `distance` 模式利用，变相实现：

- 被插入时触发电击
- 力度越大 → 强度越高

**安装 PCS**

1. 前往 PCS Booth 页面：<br>
https://dismay.booth.pm/items/5001027
2. 购买后按照官方教程：
    - 导入 Unity
    - 为 Avatar 安装 PCS
    - 确认一切功能正常
3. 上传并使用安装完成的 Avatar

**修改 Shocking VRChat 配置**

1. 打开基础配置文件 `settings-v0.2.yaml`
2. 在 `avatar_params:` 中，添加参数：<br><Copy type="tip" text="- /avatar/parameters/pcs/contact/slide-in" toolTip="已复制" />
3. 将 `mode` 修改为 <Copy type="tip" text="distance" toolTip="已复制" />

``` yaml
dglab3:
  channel_a:
    avatar_params:
    - /avatar/parameters/pcs/contact/slide-in
    mode: distance
    strength_limit: 35
  channel_b:
    avatar_params:
    - /avatar/parameters/pcs/contact/slide-in
    mode: distance
    strength_limit: 35
version: v0.2
```

随后，只需打开 PCS 的总开关 `ON/OFF` 即可使用。