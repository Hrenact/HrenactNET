import{_ as t,c as e,a2 as i,o}from"./chunks/framework.Bm4S-XEE.js";const r="/HrenactNET/images/SteamVRMixTutorial/RoomMode.drawio.png",l="/HrenactNET/images/SteamVRMixTutorial/LivingroomMode.drawio.png",p="/HrenactNET/images/SteamVRMixTutorial/BaseStation1.png",n="/HrenactNET/images/SteamVRMixTutorial/BaseStation2.png",x=JSON.parse('{"title":"调试基站","description":"","frontmatter":{"prev":{"text":"准备工作","link":"SteamVRMixTutorial/Preparation"},"next":{"text":"添加设备","link":"SteamVRMixTutorial/AddDevice"}},"headers":[],"relativePath":"SteamVRMixTutorial/BaseStation.md","filePath":"SteamVRMixTutorial/BaseStation.md","lastUpdated":null}'),s={name:"SteamVRMixTutorial/BaseStation.md"};function m(c,a,d,h,u,S){return o(),e("div",null,a[0]||(a[0]=[i('<h1 id="调试基站" tabindex="-1">调试基站 <a class="header-anchor" href="#调试基站" aria-label="Permalink to &quot;调试基站&quot;">​</a></h1><p>最终混搭效果的好与坏，很大程度上取决于基站是否正确安装以及配置。</p><h2 id="安装基站" tabindex="-1">安装基站 <a class="header-anchor" href="#安装基站" aria-label="Permalink to &quot;安装基站&quot;">​</a></h2><p>这里将使用图像粗略的演示基站应如何安装。</p><p>房间规模：</p><p><img src="'+r+'" alt="RoomMode.drawio"></p><p>客厅规模：</p><p><img src="'+l+'" alt="LivingroomMode.drawio"></p><p>总之，我们按照以下几点摆放基站即可：</p><ul><li>将基站照射范围尽可能的覆盖游戏区域</li><li>将基站安装在房间高处并向下倾斜 25度 至 35度</li><li>避免基站照射范围出现高反射率物体（例如：镜子）</li></ul><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>HTC 1.0 基站对于最近距离的要求为 0.5 米，小于此距离的 LightHouse 设备有可能会造成无法识别的问题，安装时请预留足够的空间。</p></div><p>在你安装好基站并开启 SteamVR 后，基站不会显示在 SteamVR 界面中。当在基站照射范围内出现已配对或使用数据线连接至电脑的 LightHouse 设备时，基站将自动显示在 SteamVR 界面中。</p><h2 id="基站频道" tabindex="-1">基站频道 <a class="header-anchor" href="#基站频道" aria-label="Permalink to &quot;基站频道&quot;">​</a></h2><p>基站并不是完全的开机即用。对于 1.0 基站用户，你需要手动设置频道，对于 2.0 基站，则有可能遇到频道冲突的情况。</p><p>记住，请在基站通电的情况下进行更换频道的操作。建议你一手扶 / 拿好基站，一手更换频道，避免造成不必要的损失，即使这很困难！</p><h3 id="htc-1-0-基站" tabindex="-1">HTC 1.0 基站 <a class="header-anchor" href="#htc-1-0-基站" aria-label="Permalink to &quot;HTC 1.0 基站&quot;">​</a></h3><ul><li><p>不使用同步线： 按下基站背面的频道按钮，将其中一个设为频道​ b，另一个设为频道 c 。</p></li><li><p>使用同步线： 按下基站背面的频道按钮，将其中一个设为频道 A，另一个设为频道 b 。</p></li></ul><p><img src="'+p+'" alt="BaseStation1"><em>按下方框中的按钮即可切换频道。图片来自：老敖</em></p><p>在 1.0 基站的正面，拥有一个用于显示当前频道的指示灯。在按下切换频道按钮后，请留意它是否切换到了你预期的频道。</p><h3 id="htc-2-0-基站" tabindex="-1">HTC 2.0 基站 <a class="header-anchor" href="#htc-2-0-基站" aria-label="Permalink to &quot;HTC 2.0 基站&quot;">​</a></h3><p>对于 HTC 2.0 基站，SteamVR 会自动设置基站的频道。如果你的 LightHouse 设备出现频繁丢追或方位错误的状况，则有可能遇到了频道冲突的情况。</p><p>将鼠标移动至 SteamVR 的基站图标上并稍作等待，即可在浮现的窗口中查看基站当前频道。如果有两个或以上的基站频道数相同，则需要你手动切换基站频道来恢复正常。</p><p>在基站电源接口的上方，有一个小孔，作用为手动切换频道。使用手机卡针或者掰直的回形针捅入小孔，在触底后短按一下，此时就已将完成手动切换基站频道。</p><p><img src="'+n+'" alt="BaseStation2"><em>按下此按钮即可切换频道。图片来自：Hrenact</em></p>',24)]))}const T=t(s,[["render",m]]);export{x as __pageData,T as default};
