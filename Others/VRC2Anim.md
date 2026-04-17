---
prev: false
next: false
---



# VRChat 动画录制

使用 VRChat 出色的全身追踪体验来录制 Unity `*.anim` 动画。这对不熟悉动画创作工作流的玩家会有一定的帮助。

### 写在开头

- 本教程由 B 站用户 [@茶茶orzz](https://space.bilibili.com/1063055852) 发布的视频教程 [如何用VRChat录制动作数据](https://www.bilibili.com/video/BV1qyXqBaEAh) 整理改编而来。
- 在此由衷的感谢大佬提供思路并允许我二次创作和发布图文版教程。
- 别忘了支持原作者并在视频里留下大大的赞哦！

<div class="bilibili-video">
  <iframe 
    src="//player.bilibili.com/player.html?isOutside=true&aid=116321438145279&bvid=BV1qyXqBaEAh&cid=37110874803&p=1"
    frameborder="no">
  </iframe>
</div>

### 文档目录

[[toc]]

## 教程开始

### 准备 Unity 工程

新创建一个 VRChat Avatar Unity 项目，导入你的模型并确保上传成功

![基础 Avatar 项目](/images/VRC2Anim/unity.png)

### 安装 Shader Motion

前往 Github 下载 Shader Motion：
[Shader Motion](https://github.com/CuteWaterBeary/ShaderMotion)

- 点击绿色按钮 `Code` 旁的 `三角`，在展开选项里选择 `Download ZIP`

![Shader Motion 的 Github 页面](/images/VRC2Anim/ShaderMotion/ShaderMotion.png)

解压下载后的 `ShaderMotion-github.zip`，并解压为 `ShaderMotion-github` 文件夹

右键单击 Unity `Project` 栏内 `Assets` 文件夹的空白区域，选择 `Show in Explorer`

![Show in Explorer](/images/VRC2Anim/ShaderMotion/ShowInExplorer.png)

在打开的文件资源管理器窗口中，双击高亮的 `Assets` 文件夹进入子目录

![进入 Assets 文件夹](/images/VRC2Anim/ShaderMotion/AssetsFolder.png)

随后将之前解压缩的 `ShaderMotion-github` 文件夹粘贴至 `Assets` 文件夹内

![粘贴 ShaderMotion-github 文件夹](/images/VRC2Anim/ShaderMotion/PasteShaderMotion.png)

返回 Unity 界面，导入过程中会出现 `Script Updating Consent` 弹窗，选择 `Yes, for these and other filess that might be found later` 即可，随后等待导入完成

![Script Updating Consent 弹窗](/images/VRC2Anim/ShaderMotion/ScriptUpdatingConsent.png)

选中 `Hierarchy` 栏内的 Avatar Root 层级，在 `Inspector` 栏中，单击 `Animator` 组件栏右侧的 `⁝` 按钮，选择 `SetupAvatar` 选项

![Setup Avatar](/images/VRC2Anim/ShaderMotion/SetupAvatar.png)

在打开的 SetupAvatar 窗口中，依次点击 `Setuo Motion Recorder` 和 `Setup Animator` 选项

若执行完成后，Avatar 脚下出现 **红圈** 则为成功安装 Shader Motion 相关组件

![成功安装后出现的红圈](/images/VRC2Anim/ShaderMotion/RedCircle.png)

### 上传至 VRChat 并测试

将安装了 Shader Motion 组件的 Avatar 上传至 VRChat，并在游戏内使用该 Avatar

- **对于 PC 模式：** 按下 `R` 键来打开圆盘菜单，随后依次转到 `模型功能` > `ShaderMotion` 页面
- **对于 VR 模式：** 长按 `Y` 或 `B` 键来打开圆盘菜单，随后依次转到 `模型功能` > `ShaderMotion` 页面

打开 `Record` 开关，若窗口（桌面视图）右侧出现以灰色为背景，闪烁彩色色块的 UI，脚下出现代表动画初始原点与方向的红圈，则意味着动作录制就绪

![录制已就绪](/images/VRC2Anim/ShaderMotion/ReadyToRecord.png)

### 录制 VRChat 窗口视频

选中 VRChat 窗口，按住 `Alt` 键的同时按下 `Enter` 键激活全屏模式

打开 OBS，如果你还没使用 OBS，请调整 OBS 相关设置

- **输出**
  - 视频码率：5000 Kbps
  - 录像格式：MPEG-4 (.mp4)
- **视频**
  - 基础（画布）分辨率：1920x1080
  - 输出（缩放）分辨率：与基础（画布）分辨率相同
  - 整数帧率：至少 60 FPS

::: tip
- 此处为笔者的推荐设置，如果你了解 OBS，可以使用自己喜欢的设置。
- 如果你想查看 Shader Motion 建议的 OBS 设置，请查看[这里](https://github.com/CuteWaterBeary/ShaderMotion?tab=readme-ov-file#recommended-obs-streaming-settings)。
:::

单击 OBS `源` 栏左下角的 `+` 号，在选项栏中选择 `窗口采集`

![添加源](/images/VRC2Anim/ShaderMotion/OBSAddSource.png)

在弹出的窗口中，选择 `新建`，并修改名称为 `VRChat`，随后单击 `确定` 按钮

![修改源名称](/images/VRC2Anim/ShaderMotion/OBSCreateSource.png)

在弹出的窗口中，参考下方例图修改窗口选项，随后单击 `确定` 按钮即可成功添加源

![设置 VRChat 源](/images/VRC2Anim/ShaderMotion/OBSSetSource.png)

准备好后，单击 OBS `控制按钮` 栏的 `开始录制` 即可开始在 VRChat 中摆出你想要录制的动作

动作结束后，单击 `停止录制` 按钮即可停止录制并保存录制的视频

::: tip
- 如果你不知道视频保存在哪了，OBS 的左下角会显示一条保存日志，例如
- `录像已保存到 "保存路径/年-月-日 时-分-秒.mp4"`
:::

<video controls width="100%">
  <source src="/videos/obs.mp4" type="video/mp4">
</video>

*OBS 操作示例视频*

<video controls width="100%">
  <source src="/videos/vrchat.mp4" type="video/mp4">
</video>

*录制好的示例 VRChat 视频*

### 安装 Easy Motion Recorder

前往 Github 下载 Easy Motion Recorder：
[Easy Motion Recorder](https://github.com/neon-izm/EasyMotionRecorder)

- 点击 `Releases` 标题，转到发布页面

![Easy Motion Recorder](/images/VRC2Anim/ShaderMotion/EasyMotionRecorder.png)

- 点击最新版本号 `Assets` 下方的 `EasyMotionRecorder.unitypackage` 来下载

![下载发布版](/images/VRC2Anim/ShaderMotion/DownloadEMRRelease.png)

打开之前 VRChat Avatar Unity 项目，随后双击下载好的 `EasyMotionRecorder.unitypackage` 进行导入

在弹出的 `Import Unity Package` 窗口中，单击 `Import` 按钮即可开始导入

![导入 Easy Motion Recorder](/images/VRC2Anim/ShaderMotion/ImportEMR.png)

### 安装 Sample Shader Motion Prefab

单击链接以下载 Sample Shader Motion Prefab：
https://hrenact.net/Files/SampleShaderMotionPrefab.unitypackage

参考 `安装 Easy Motion Recorder` 章节，导入 UnityPackage 文件至 Unity 内

### 导入录制的 VRChat 视频

右键单击 Unity `Project` 栏内 `Assets` 文件夹的空白区域，选择 `Create` > `Folder`

![新建文件夹](/images/VRC2Anim/ShaderMotion/CreateFolder.png)

随后重命名文件夹为 `Videos` 并双击文件夹进入目录

![重命名为 Videos](/images/VRC2Anim/ShaderMotion/RenameFolder.png)

将之前录制好的 VRChat 视频拖入至目录空白处

![添加录制好的视频](/images/VRC2Anim/ShaderMotion/AddVideo.png)

### 调整场景和 Avatar

根据以下说明调整 `Hierarchy` 场景层级

- 选中 `Hierarchy` 栏内的 Avatar Root 层级，复制一份，并隐藏原模型
- 转到 `Project` 栏内 `Assets` 文件夹，前往 `EasyMotionRecorder` > `Prefabs` 路径<br>
  将 `EasyMotionRecorder.prefab` 拖入至 `Hierarchy` 内的层级
- 转到 `Project` 栏内 `Assets` 文件夹，前往 `SampleShaderMotionPrefab` 路径<br>
  将 `ShaderMotionVideoPlayer.prefab` 拖入至 `Hierarchy` 内的层级

![调整好的层级](/images/VRC2Anim/ShaderMotion/ADjustHierarchy.png)

展开 Avatar 层级，移除残留的 `Recorder` 和 `SMVRCA` 物体

![残留的 Shader Motion 组件](/images/VRC2Anim/ShaderMotion/DelRecorderSMVRCA.png)

选中 Avatar Root 层级，移除 `Pipeline Manager` 和 `VRC Avatar Descriptor` 组件

随后，点击 `Add Component` 按钮，输入 `Motion Player` 进行搜索，在下拉栏中选择 `Motion Player` 来添加组件

![移除 VRC 组件并添加新组件](/images/VRC2Anim/ShaderMotion/AddMotionPlayer.png)

随后修改 `Motion Player` 组件内的值

- 单击 `Motion Buffer` 插槽右侧的 `⨀` 按钮，在弹出的窗口中选择 `MotionDec` 资产
- 修改 `Human Scale` 的值为 `0`
- 勾选 `Apply Human Pose` 的复选框

![Motion Player 修改示例](/images/VRC2Anim/ShaderMotion/AdjustMotionPlayer.png)

选中 `Hierarchy` 栏内的 `EasyMotionRecorder` 层级，进行修改

- 取消勾选 `Motion Data Player` 组件的复选框
- 将 Avatar Root 拖入至 `Animator` 插槽内
- 取消勾选 `Face Animation Recorder` 组件的复选框

![EasyMotionRecorder 修改示例](/images/VRC2Anim/ShaderMotion/AdjustEasyMotionRecorder.png)

选中 `Hierarchy` 栏内的 `ShaderMotionVideoPlayer` 层级，随后展开并选中 `VideoPlayer` 物体

将之前导入的视频拖入至 `Video Player` 组件的 `Video Clip` 插槽内

![Video Player 修改示例](/images/VRC2Anim/ShaderMotion/AdjustVideoPlayer.png)

### 录制动画数据

按下 Unity 窗口中上侧的 `▶` 按钮，开始播放后切换回 `Scene` 栏，检查 Avatar 动作是否与背景视频保持一致

<video controls width="100%">
  <source src="/videos/unity.mp4" type="video/mp4">
</video>

*Avatar 动作与视频保持一致*

保持播放不变，切换回 `Game` 栏，随后选中 `Hierarchy` 栏内的 `EasyMotionRecorder` 层级

- 按下 `R` 键开始录制动作数据，`Motion Data Recorder` 组件内 `Frame Index` 的值开始增长
- 按下 `X` 键停止录制动作数据，`Motion Data Recorder` 组件内 `Frame Index` 的值归 0

<video controls width="100%">
  <source src="/videos/unity2.mp4" type="video/mp4">
</video>

*开始录制与停止录制动作数据*

再次按下 Unity 窗口中上侧的 `▶` 按钮，停止运行后会自动切换回 `Scene` 栏

你会发现 `Project` 栏内 `Assets` 新增了一个名为 `Resources` 的文件夹，里面存放的就是刚刚录制的动作数据

选中动作数据 `Asset` 文件，单击 `Inspector` 栏右上角的 `⁝` 按钮，随后选择 `Export as Humanoid animation clips` 选项即可在同目录导出为 Unity 动画

![作为通用人形动画剪辑导出](/images/VRC2Anim/ShaderMotion/ExportAnim.png)

选中刚刚导出的 `*.anim` 动画，在 `Inspector` 栏中修改动画导入选项

- Root Transform Rotation
  - Bake Into Pose `√`
  - Based Upon `Original`
- Root Transform Rotation (Y)
  - Bake Into Pose `√`
  - Based Upon (at Start) `Original`
- Root Transform Rotation (XZ)
  - Bake Into Pose `√`
  - Based Upon (at Start) `Original`

![修改动画的导入选项](/images/VRC2Anim/ShaderMotion/AdjustAnim.png)

### 检查动画数据

按住 `Inspector` 栏中预览区域的边栏向上拖，随后将 Avatar Root 拖进预览区域

- 在预览区域内按住 `鼠标左键` 来平移视图
- 在预览区域内按住 `鼠标右键` 来旋转视图

按下预览区域左上角的 `▶` 按钮播放动画预览，检查是否与原始动作吻合，若符合要求，即可进行二次修改与创作

![检查动画是否连贯无明显卡顿](/images/VRC2Anim/ShaderMotion/CheckAnim.png)

## 末尾提醒

使用 `EasyMotionRecorder` 录制较长的动画数据会消耗大量系统内存，同时减缓 Unity 响应速度

在录制动画前，请确保后台没有占用大量系统资源的软件，某种程度上这也会影响最终动画是否连贯顺畅