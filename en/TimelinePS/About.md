---
prev: false
next:
  text: 'What is Timeline Text<br>何为 Timeline Text'
  link: 'en/TimelinePS/TimelineText'
---

<p align="center">
<img src="https://booth.pximg.net/65f805ce-cafe-401a-8a59-17e2b7719def/i/8405950/7bdde5c0-c394-483e-9755-f052981bb57a_base_resized.jpg" alt="World Menu" width="512" height="512" />
</p>

---

- [简体中文](https://hrenact.net/TimelinePS/About)
- [日本語](https://hrenact.net/jp/TimelinePS/About)

::: danger About Translation
Translation for reference only! This AI-assisted translation may contain ambiguities. Please refer to the [Simplified Chinese](https://hrenact.net/TimelinePS/About) version.
:::

::: warning Warning 
This asset is not plug-and-play. You need a certain level of experience with Unity, knowledge of C# programming, and an understanding of world-building workflows to use this asset properly and smoothly.
:::

---

# Timeline Player System

Timeline Player System is a slightly complex performance system for VRChat worlds.

In it, most **Module** operate around timeline text similar to the `*.lrc` file format, working together with the **Core** to perform a series of operations, achieving quite rich visual effects.

- Below is a typical usage example:

After interacting with **a bouquet of flowers**, the world BGM gradually fades out, while music starts playing, lyrics appear line by line in the air, the world brightness increases during the climax, photos are displayed near the end, and a message note appears on the table after the song ends.

## Provided Functions

**TimelinePlayerSystem.zip** ：

Name | Functions
-- | --
TimelinePlayerCore | - Player synchronization<br>- Play main audio `Music Source`<br>- Search for and initialize `Module`<br>- Pass time, play, and end states to `Module`
ActiveModule | - `Activate/Deactivate` objects in `Activate On Play` after play start<br>- `Activate/Deactivate` objects in `Deactivate On Stop` after play end
DuckModule | - Temporarily reduce the volume of the `Background Source` after play start<br>- Restore the volume of the `Background Source` after play end<br>- If `Sync Slider` is specified, temporarily disable interaction synchronously
ImageModule | - After play start, automatically adjust the transparency of the `Target Image` based on the time and value parsed from the `Timeline Text`
LyricModule | - After play start, automatically switch the text of the `Text UI` based on the time and lyrics parsed from the `Timeline Text`
PostProcessModule | After play start, automatically adjust the weight of the `Post Process Volume` based on the time and weight parsed from the `Timeline Text`
VolumeModule | After play start, automatically adjust the volume of the `Target Source` based on the time and volume parsed from the `Timeline Text`

## Example Worlds

Below is the world that uses this system, feel free to visit.

- [Timeline Player System Demo](https://vrchat.com/home/world/wrld_1d69386d-4d62-43e1-a86f-e7b1fda98f31/info)
- [.1 Room](https://vrchat.com/home/world/wrld_73bc1f16-70db-4cad-9246-17954cca1340/info)

::: tip Tip
You can leave the link to your world in the comments section, and I will find time to play it and add suitable maps to the example world.
:::