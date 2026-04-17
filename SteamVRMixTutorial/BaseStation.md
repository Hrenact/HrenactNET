---
prev:
  text: '准备工作'
  link: 'SteamVRMixTutorial/Preparation'
next:
  text: '添加设备'
  link: 'SteamVRMixTutorial/AddDevice'
---

# 调试基站

最终混搭效果的好与坏，很大程度上取决于基站是否正确安装以及配置。

## 安装基站

这里将使用图像粗略的演示基站应如何安装。

房间规模：

![RoomMode.drawio](/images/SteamVRMixTutorial/RoomMode.drawio.png)

客厅规模：

![LivingroomMode.drawio](/images/SteamVRMixTutorial/LivingroomMode.drawio.png)

总之，我们按照以下几点摆放基站即可：

- 将基站照射范围尽可能的覆盖游戏区域
- 将基站安装在房间高处并向下倾斜 25度 至 35度
- 避免基站照射范围出现高反射率物体（例如：镜子）

::: tip
HTC 1.0 在安装时需确保基站之间能相互看见，因为它使用红外光进行同步。HTC 2.0 基站则无需在意。
:::

在你安装好基站并开启 SteamVR 后，基站不会显示在 SteamVR 界面中。当在基站照射范围内出现已配对或使用数据线连接至电脑的 LightHouse 设备时，基站将自动显示在 SteamVR 界面中。

## 基站频道

基站并不是完全的开机即用。对于 1.0 基站用户，你需要手动设置频道，对于 2.0 基站，则有可能遇到频道冲突的情况。

记住，更换频道的操作只能在基站通电的情况下进行。并且基站无需使用任何方式连接电脑，SteamVR 会自动识别。

### HTC 1.0 基站

- **基站可相互看见**：
按下基站背面的频道按钮，将其中一个设为频道​ b，另一个设为频道 c 。

- **基站无法相互看见 / 使用同步线**：
按下基站背面的频道按钮，将其中一个设为频道 A，另一个设为频道 b 。

![BaseStation1](/images/SteamVRMixTutorial/BaseStation1.png)
_按下方框中的按钮即可切换频道。图片来自：老敖_

在 1.0 基站的正面，拥有一个用于显示当前频道的指示灯。在按下切换频道按钮后，请留意它是否切换到了你预期的频道。

### HTC 2.0 基站

对于 HTC 2.0 基站，SteamVR 会自动设置基站的频道。如果你的 LightHouse 设备出现频繁丢追或方位错误的状况，则有可能遇到了频道冲突的情况。

将鼠标移动至 SteamVR 的基站图标上并稍作等待，即可在浮现的窗口中查看基站当前频道。如果有两个或以上的基站频道数相同，则需要你手动切换基站频道来恢复正常。

在基站电源接口的上方，有一个小孔，作用为手动切换频道。使用手机卡针或者掰直的回形针捅入小孔，在触底后短按一下，此时就已将完成手动切换基站频道。

![BaseStation2](/images/SteamVRMixTutorial/BaseStation2.png)
_按下此按钮即可切换频道。图片来自：Hrenact_