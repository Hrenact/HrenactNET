---
prev:
  text: '调试基站'
  link: 'SteamVRMixTutorial/BaseStation'
next:
  text: '校准设备'
  link: 'SteamVRMixTutorial/CalibrateDevice'
---

# 添加设备

确保基站相关项目无误后，你就可以开始在 SteamVR 内添加 Lighthouse 设备了。

将接收器插入电脑的 USB 接口，并启动 SteamVR。

点击 SteamVR 左上角的菜单，打开下拉菜单。将鼠标移动至 `设备`，稍做等待，在浮现的窗口中点击 `配对控制器`，弹出 `选择您的控制器类型` 窗口。

![SteamVR](/images/SteamVRMixTutorial/SteamVR.png)

Controller Pairing：

![AddController](/images/SteamVRMixTutorial/AddController.png)

选择对应的设备，按照提示完成配对，成功后将在 SteamVR 界面出现你刚刚添加的设备。

请记住，一个接收器只能配对一个 LightHouse 设备。在配对或配对完成后选择 `配对另一个控制器` 时，如果出现 `请关闭您现有控制器中的一个` 字样，请检查是否插入了数量充足的接收器并确保接口牢固。如果不起作用，请按照下方图示打开 `开发者设置` 并点击 `移除所有 SteamVR USB 设备` 并按照提示来从头开始重新配对。

![SteamVRDev](/images/SteamVRMixTutorial/SteamVRDev.png)
![SteamVRDev](/images/SteamVRMixTutorial/SteamVRRemoveUSB1.png)
![SteamVRDev](/images/SteamVRMixTutorial/SteamVRRemoveUSB2.png)
![SteamVRDev](/images/SteamVRMixTutorial/SteamVRRemoveUSB3.png)

::: tip
你可以先只添加一个 Tracker ，方便在连续校准章节中快速找到需要作为连续校准用的目标设备。
:::