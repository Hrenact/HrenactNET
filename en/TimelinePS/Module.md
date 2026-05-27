---
prev:
  text: 'What is Timeline Text<br>何为 Timeline Text'
  link: 'en/TimelinePS/TimelineText'
next:
  text: 'Question and Answer<br>疑难解答'
  link: 'en/TimelinePS/QA'
---

# What is Module

`Module` exists as an **optional/extension** to the `Core` functionality. Its core philosophy lies in:

- Ease of troubleshooting and reuse
- Not affecting the `Core` and other `Module`

## Add Module

`TimelinePlayerCore` automatically searches for `UdonSharpBehaviour` within its hierarchy at runtime and invokes them.

Therefore, to install a `Module` , simply drag the object with the `Module` script attached into the hierarchy of the object with the `Core` script attached.

``` text
▼ TimelinePlayerCore
├─ LyricModule1
├─ LyricModule2
├─ ...
├─ YourModuleHere
├─ ...
└─ ActiveModule
```

## Create Module

To create a suitable `Module` , you can refer to the section below.

The most recommended approach is to use `ActiveModule` as a reference. This `Module` does not have a complex `Timeline` system, making it a good starting point for learning how to create a `Module`.

### Method

| Method | Description |
| -- | -- |
| <Copy type="tip" text="public void Init()" toolTip="Copied" /> | - Method called by `Core` on `Module` when initialization begins |
| <Copy type="tip" text="public void OnPlay()" toolTip="Copied" /> | - Method called by `Core` on `Module` when `SongStart()` is called on `Core` |
| <Copy type="tip" text="public void OnStop()" toolTip="Copied" /> | - Method called by `Core` on `Module` when play end<br>- Method called by `Core` on `Module` when joining a instance if play has already ended |
| <Copy type="tip" text="public void OnTimeUpdate()" toolTip="Copied" /> | - Method called by `Core` on `Module` when the time updates |

### Field

| Field | Description
| -- | -- |
| <Copy type="tip" text="private bool hasSynced;" toolTip="Copied" /> | - Used internally within `Module` to determine whether it is synchronized with others |
| <Copy type="tip" text="[HideInInspector]" toolTip="Copied" /><br><Copy type="tip" text="public float currentTime;" toolTip="Copied" /> | - This field is automatically populated by `Core`<br>- The current playback progress/time uniformly broadcasted by `Core` |

### Code

| Code | Description |
| -- | -- |
| <Copy type="tip" text="namespace YOURNAME" toolTip="Copied" /> | - Avoid naming conflicts that may lead to code collisions |
| <Copy type="tip" text="[UdonBehaviourSyncMode(BehaviourSyncMode.None)]" toolTip="Copied" /> | - `Core` already handles synchronization of playback state, so no need to implement it again

### Logging

``` C#
// When Core notifies the Module to initialize
Debug.Log("<color=#COLOR>[ModuleName]</color> <b>" + gameObject.name + "</b> 模块开始初始化。");
// When updating the target value
Debug.Log("<color=#COLOR>[ModuleName]</color> <b>" + gameObject.name + "</b> 正在更新值，目标: <b>" + Value + "</b>");
```

Why this is recommended:

- `<color>` : color tag : used to quickly distinguish this `Module` logs from those of other scripts
- `<b> + gameObject.name` : bold tag + the name of the GameObject the module is attached to : allows to quickly locate the object to debug
- `<b> + Value` : bold tag + the value : highlights the state of the value