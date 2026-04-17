---
prev:
  text: '添加设备'
  link: 'SteamVRMixTutorial/AddDevice'
next: false
---

# 校准设备

添加完所有的 Lighthouse 设备后，距离愉快玩耍就不远了。

## 设置软件

下载并安装软件 [OpenVR-SpaceCalibrator](https://github.com/hyblocker/OpenVR-SpaceCalibrator/releases/tag/v1.5)。为了方便国人使用，我在他人帮助下制作了汉化版 [OpenVR-SpaceCalibrator-CN](https://github.com/Hrenact/OpenVR-SpaceCalibrator-CN/releases/tag/v1.5.1)。此教程使用汉化版来演示。

打开任意一个链接，单击`Asstes`下拉栏中后缀为`*.exe`的文件来下载。下载完成后，前往下载目录并双击来打开安装程序，并按照提示完成安装。

以 Edge 浏览器为例，如果无法正常下载出现误报情况，请按照下方例图处理。

![DownloadError1](/images/SteamVRMixTutorial/DownloadError1.png)
![DownloadError2](/images/SteamVRMixTutorial/DownloadError2.png)

如果在此之前你已经安装 OpenVR-SpaceCalibrator 的任何版本，则会弹出警告。点击`确定`按钮将会进行覆盖安装，点击`取消`按钮将取消安装。

![InstallError](/images/SteamVRMixTutorial/InstallError.png)

软件安装完成后，确认你的头戴设备已连接至电脑并打开 SteamVR，OpenVR-SpaceCalibrator 会跟随 SteamVR 一并启动。如果没有，请转到 OpenVR-SpaceCalibrator 的安装目录，在 SteamVR 开启的情况下，双击`manifest.vrmanifest`文件来手动导入配置文件。如果这依旧没有用，请尝试卸载并重新安装 OpenVR-SpaceCalibrator。

![ImportOSC](/images/SteamVRMixTutorial/ImportOSC.png)

如果你安装的原始版本为 v1.5 ，你可以参照此教程中的汉化版截图来操作。

软件界面：

![SpaceCalibratorCN](/images/SteamVRMixTutorial/SpaceCalibratorCN.png)

::: tip
初次安装的 OpenVR-SpaceCalibrator 只会显示`开始校准`选项，你需要进行一次手动校准才能解锁其它选项。
:::

## 手动校准

手动校准需要将`主设备`选择为一体机的左或者右手柄，并将`副设备`选择为对应的 LightHouse 设备。

以 Pico 4 和 Index Knuckle 指虎举例：

![P4Left](/images/SteamVRMixTutorial/P4Left.png)

或

![P4Right](/images/SteamVRMixTutorial/P4Right.png)

选择合适的 `校准速度`，此选项仅影响手动校准时校准的时长。更长的校准时长意味着获得更多的校准数据，也意味着位置越准确。

握紧你选择的设备，就像是用强力胶固定在一起了一样，确保它们在校准过程中不会发生移位。点击`开始校准`后，通过移动和旋转设备（例如：画 8 字）提供足够的位置信息，直到进度条达到100%。

在校准成功后，将在进度条下方出现`Finshed calibration, profile saved`，单击下方的`Close`按钮来返回主界面。

![Finished](/images/SteamVRMixTutorial/Finished.png)

此时，你的 LightHouse 设备在 SteamVR 界面的位置将会与现实位置对齐。

::: warning
如果出现了非`Finshed calibration, profile saved`以外的其它文本，则为校准失败，你应该点击`Close`按钮并重新校准。
:::

## 连续校准

使用连续校准方案时，VRChat 会默认打开 FBT 支持模式。如有需要，你可以在设置中关闭全身追踪。

连续校准需要将“主设备”选择为一体机的头显，并将“副设备”选择为固定在头显上的 LightHouse 设备。

以 Pico 4 和  HTC 3.0 Traker 举例：

![P4Tracker](/images/SteamVRMixTutorial/P4Tracker.png)

点击“连续校准”来进入到连续校准界面。

连续校准主要界面：

![AlwaysCalibrator](/images/SteamVRMixTutorial/AlwaysCalibrator.png)

简单介绍一下我们需要用到的功能：

- 取消连续校准：单击后将退出连续校准并回到软件主界面
- 隐藏混搭追踪器：勾选后将在 VRChat 校准全身追踪时隐藏此追踪器
- 保持自动校准：勾选后软件将一直在后台校准设备位置

对于普通用户，勾选`隐藏混搭追踪器`即可。

带上头显并在房间内走动，软件在收集到一定的数据后，LightHouse 设备位置将会与现实位置同步。

# 教程结束