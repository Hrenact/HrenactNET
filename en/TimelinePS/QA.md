---
prev:
  text: 'What is Module<br>何为 Module'
  link: 'en/TimelinePS/Module'
next: false
---

# Question and Answer

If you have any questions not covered, feel free to ask in the comments, and I'll do my best to answer them.

## Q：Timeline Module does not execute as expected

A：The time format in `Timeline Text` might be incorrect:

The correct time format is shown below. Note that between `seconds` and `milliseconds`  there is a `.` , not a `:`

- `[` `minutes` `:` `seconds` `.` `milliseconds` `]`

Another possibility is that the value in `Timeline Text` is out of bounds:

- `LyricModule` accepts any content, including rich text tags
- `VolumeModule` only accepts values between 0 and 1, e.g., 0.75
- And so on…

There is also an optional **space** between the time and the value:

- `[minutes:seconds.milliseconds]`+` `+`text`

## Q： Lyrics show characters like "□□□"

A：This occurs because the current `Font Asset` does not contain font information for those characters. You can fix it by following these steps:

1. In the Unity window, go to the top menu bar
2. Edit > Project Setting...
3. In the Project Settings window
4. Enter <Copy type="tip" text="Match Material Presets" toolTip="已复制" /> in the search box at the top right
5. Uncheck the highlighted `Match Material Presets` checkbox

This allows VRChat to take over the missing font information and display the missing text using VRChat's font.

## Q：After importing, the console reports errors and Unity cannot enter Play Mode

A：This may be because the `Post Processing` package has not yet been imported into the project. Importing it will resolve the issue.

If you do not need post-processing related effects:<br>Navigate to `Assets\HrenactNET\TimelinePlayerSystem\Script\Module` and delete the `PostProcessModule` folder.