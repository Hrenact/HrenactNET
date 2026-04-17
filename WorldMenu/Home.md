---
prev:
  text: 'Page Manager'
  link: 'WorldMenu/PageManager'
next:
  text: 'Player Log'
  link: 'WorldMenu/PlayerLog'
---

# 主页 / Home

## ▸ 问候与玩家名称 Greeting & Player Name

### Greeting

- 用于显示 `Greeting Text` 文本
- 有关自定义 `Greeting Text` 文本，请参阅 `▾ 多语言支持 i18n Support`

### Player Name

- 用于显示获取到的本地玩家 Display Name 文本

## ▸ 时长与人数 Stayed Time & Player Number

### Player Number

- 用于显示当前实例内的玩家总人数，格式为 `人数`+`People Text`
- 有关自定义 `People Text` 文本，请参阅 `▾ 多语言支持 i18n Support`

### Stayed Time

- 用于显示本地玩家在本次加入实例后呆了多久
- 格式为

时长 | 最终文本 | 示例
:--: | :--: | :--:
不足一分钟 | `数字`+`Seconds` | 23<font size=0.5em;>秒</font>
不足一小时 | `数字`+`Minutes` | 2<font size=0.5em;>分</font>
不足一天 | `数字`+`Hours`+`数字`+`Minutes` | 4<font size=0.5em;>时</font>56<font size=0.5em;>分</font>
大于一天 | `数字`+`Days`+`数字`+`Hours`+`数字`+`Minutes` | 2<font size=0.5em;>天</font>5<font size=0.5em;>时</font>8<font size=0.5em;>分</font>

- 有关自定义 `Seconds`/`Minutes`/`Hours`/`Days` 文本，请参阅 `▾ 多语言支持 i18n Support`

## ▸ 时间日期星期 Time, Date, Weekday

### Time

- 用于显示当前时间，格式为 `- HH:mm:ss -`

### DateWeek

- 用于显示当前年月日和星期，格式为 `yyyy/M/d - `+`Weekday Text`
- 有关自定义 `Weekday Text` 文本，请参阅 `▾ 多语言支持 i18n Support`

## ▾ 多语言支持 i18n Support

### ┣━ 问候文本 Greeting Text

- 用于 `Greeting` 的 i18n 文本
- 显示条件为

i18n 文本 | 时间（24 小时制）
:--: | :--:
When Is Morning | 6 ≤ 当前时间 < 10
When Is Noon | 10 ≤ 当前时间 < 13
When Is Afternoon | 13 ≤ 当前时间 < 18
When Is Evening | 18 ≤ 当前时间 < 22
When Is Night | 22 ≤ 当前时间 < 6

### ┣━ 人数文本 People Text

- 用于 `Player Number` 的 i18n 文本

### ┣━ 星期文本 Weekday Text

- 用于 `DateWeek` 的 i18n 文本
- 显示条件为

i18n 文本 | 具体星期
:--: | :--:
Sunday | 为星期日时
Monday | 为星期一时
Tuesday | 为星期二时
Wednesday | 为星期三时
Thursday | 为星期四时
Friday | 为星期五时
Saturday | 为星期六时

### ┗━ 停留时长文本 Stayed Time Text

- 用于 `Stayed Time` 的 i18n 文本