# 自制 SteamVR 接收器

预计耗时：10~20 分钟

难度：★☆☆☆☆

适用对象：
- E104-BT5040U
- 自制 nRF52840 USB Dongle

本教程根据以下视频教程整理并改编：

- [【SteamVR】适用于 Vive 、Tundra、SteamVR 设备的平替接收器制作思路和方案！](https://www.bilibili.com/video/BV1Fs4y1T7KK)

十分感谢原作者 [@Colanns](https://space.bilibili.com/392441) 耐心制作并分享教程。

本文主要将视频内容整理为图文步骤，方便查阅和后续参考。如希望了解接收器的工作原理或更多背景知识，推荐观看原视频。

## 软件

请安装以下软件：
- nRF Connect for Desktop
- Programmer（在 nRF Connect 内安装）

软件下载地址：
- [Nordic 官网 nRF Connect for Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop/Download#infotabs)

## 硬件

本教程基于淘宝现成模块：
- 亿伯特 E104-BT5040U

若自制接收器，请使用芯片：
- nRF52840
- [USB Dongle 设计参考 PCB](./public/Files/PCB文件-nrf52840-usb-dongle---hardware-files-2_1_1.zip)

## 固件

在此处下载本教程要用到的固件压缩包：
- [适用于 E104-BT5040U 的固件](./public/Files/修改完毕的刷机固件.zip)

固件提取自 Valve Index 官方固件，仅对其中部分内容进行了修改，用于屏蔽原生固件的麦克风功能。

# 制作步骤

- 双击打开下载好的 `nrfconnect-setup-x.x.x-x64.exe` 程序

- Windows 会询问 `你想要安装这个软件吗？`，选 `安装`

![安装](/images/SteamVRDongle/installYN.png)

- 软件会弹窗请求帮助他们改善 nRF Connect，收集你的一些使用习惯
- 看你个人喜好 `Decline/拒绝` 还是 `Accept/接受`

![请求帮助](/images/SteamVRDongle/HelpUs.png)

- 接着它就会要求你安装 SEGGER J-Link，点 `Install`

![要求安装](/images/SteamVRDongle/InstallSJL.png)

- 会在新窗口中打开 SEGGER J-Link 的安装界面
- 右下角依次点 `NEXT` > `I Agree` 就行

![安装界面](/images/SteamVRDongle/InstallSJL1.png)

- 到这里，其余选项保存不动，可以改个安装位置 `Destination Folder`
- 我习惯把软件装 D 盘，所以选中 C 然后输入 D 就行
- 接着点 `Next` > `Install`

![安装界面 1](/images/SteamVRDongle/InstallSJL2.png)

- 安装完成后会弹出来个 DLL Updater，选 `Cancel`
- 然后在  SEGGER J-Link 的安装界面选 `Finish`

![DLL 更新器](/images/SteamVRDongle/DLLUpdater.png)

- 回到 nRF Connect，会看到它显示 SEGGER J-Link 安装完成，选 `Close`

![SEGGER J-Link 安装完成](/images/SteamVRDongle/SJLInstallFinish.png)

- 接着它会问要不要看看快速上手 App，咱不需要，选 `Close`

![快速上手 APP](/images/SteamVRDongle/QuickStart.png)

- 往下翻，找到 Programmer 模块，选 `Install` 安装
- 耐心等待安装完成，选 `Open` 打开 Programmer 模块

![Programmer 模块](/images/SteamVRDongle/Programmer.png)

- 打开 E104-BT5040U 的蓝色外壳，露出里面的 PCB 板
- PCB 的正面对应着没有标签的那面壳子，可以记一下

![Programmer 模块](/images/SteamVRDongle/OpenShell.jpg)

- 按住 USB 接口右下方的按钮，将接收器插入电脑。
- 如果是台式机，优先考虑使用背面的接口
- 接着，你会看见 PCB 的左上角有个红色小灯在缓慢闪烁，这个时候就能松手了
- 展开 Programmer 窗口左上角的 `SELECT DEVICE` 下拉框
- 选择我们刚刚插入的 `Open DFU Bootloader`

![选择设备](/images/SteamVRDongle/SelectDevice.png)

- 随后就能看见窗口右侧的 `Device memory Layout` 字样变成了我们刚刚选择的 `nRF52840`
- 解压下载好的 `修改完毕的刷机固件.zip`，将里面的四个 `*.hex` 文件全选后，一次性全部拖入左侧的 `Drag & drop HEX/ZIP files here` 区域
- **必须将压缩包内四个 HEX 文件一次性全部拖进去，不要单独刷其中某一个**

![加载 HEX 文件](/images/SteamVRDongle/LoadedHEX.png)

- 点击左侧的 `Write` 按钮，将拖入的固件刷进 PCB
- **刷写过程中不要拔掉 USB！！！！！！！！！**
- 开始刷写后，会出现一个 `Nordic SDFU` 弹窗告诉你当前进度，完成后弹窗会自己消失

*（这里没配图是因为截图慢了一步没截上，以后随缘补）*

- 再次展开 Programmer 窗口左上角的 `SELECT DEVICE` 下拉框
- 我们可以看见 `Open DFU Bootloader` 变成了 `Valve VR Radio`

![Valve VR Radio](/images/SteamVRDongle/WriteFinished.png)

- 固件刷入完成，剩下的就是装回外壳，打开 SteamVR 测试能不能正常配对了

# 教程后记

其实我一直懒得写教程。最开始确实想靠这个赚点零花钱，所以一直没有公开整理这些步骤。直到写这篇教程前几天，看见闲鱼上越来越多价格离谱、宣传得天花乱坠的接收器，想了想还是决定写出来：

- 至少以后自己忘了步骤时，不用再翻聊天记录和收藏夹

接收器本身没有什么神秘的地方，网上其实一直都有不少资料，只是比较零散。把这些步骤整理成一篇完整教程，希望能让后来的人少踩一点坑。

顺便分享一个冷知识：SteamVR 原配的接收器底座其实没有复杂的电路，它主要负责完成 Type-C 转 USB，并增加一定的屏蔽措施。

所以如果只是为了把接收器远离 USB 接口，一个质量不错、带屏蔽层和磁环的 USB 延长线，在很多情况下也能达到不错的效果。