---
prev:
  text: 'Timeline Text とは何ですか<br>何为 Timeline Text'
  link: 'jp/TimelinePS/TimelineText'
next:
  text: '質問と回答<br>疑难解答'
  link: 'jp/TimelinePS/QA'
---

# Module とは何ですか

`Module` は、`Core` 機能の **オプション／拡張項目** として存在します。その核となる理念は以下の通りです：

- 容易な調査と再利用が可能であること
- `Core` や他の `Module` に影響を与えないこと

## 追加 Module

`TimelinePlayerCore` は実行時に、自身の階層下にある `UdonSharpBehaviour` を自動的に検索し、それらを呼び出します。

そのため、`Module` をインストールするには、`Module` スクリプトをアタッチしたオブジェクトを、`Core` スクリプトをアタッチしたオブジェクトの階層内にドラッグするだけで構いません。

``` text
▼ TimelinePlayerCore
├─ LyricModule1
├─ LyricModule2
├─ ...
├─ YourModuleHere
├─ ...
└─ ActiveModule
```

## 制作 Module

適切な `Module` を作成するには、下記の章を参考にしてください。

最も推奨される方法は、`ActiveModule` を参考にすることです。この `Module` には複雑な `Timeline` システムが含まれておらず、`Module` 作成の入門として適しています。

### メソッド

| メソッド | 説明 |
| -- | -- |
| <Copy type="tip" text="public void Init()" toolTip="コピーしました" /> | - `Core` が初期化を開始する際に `Module` に対して呼び出すメソッド |
| <Copy type="tip" text="public void OnPlay()" toolTip="コピーしました" /> | - `Core` で `SongStart()` が呼び出された際に `Module` に対して呼び出すメソッド |
| <Copy type="tip" text="public void OnStop()" toolTip="コピーしました" /> | - `Core` が再生を終了する際に `Module` に対して呼び出すメソッド<br>- ルーム参加時に既に再生が終了している場合、`Core` が `Module` に対して呼び出すメソッド |
| <Copy type="tip" text="public void OnTimeUpdate()" toolTip="コピーしました" /> | - `Core` の時間が更新される際に `Module` に対して呼び出すメソッド |

### フィールド

| フィールド | 説明
| -- | -- |
| <Copy type="tip" text="private bool hasSynced;" toolTip="コピーしました" /> | - `Module` 内部で他プレイヤーと同期しているかどうかを判断するために使用 |
| <Copy type="tip" text="[HideInInspector]" toolTip="コピーしました" /><br><Copy type="tip" text="public float currentTime;" toolTip="コピーしました" /> | - このフィールドは `Core` によって自動入力される<br>- `Core` が一斉にブロードキャストする現在の再生進行度／時間 |

### コード

| コード | 説明 |
| -- | -- |
| <Copy type="tip" text="namespace YOURNAME" toolTip="コピーしました" /> | - 名前の重複によるコードの衝突を回避 |
| <Copy type="tip" text="[UdonBehaviourSyncMode(BehaviourSyncMode.None)]" toolTip="コピーしました" /> | - `Core` が既に再生状態の同期を担当しているため、二重実装は不要

### ログ

``` C#
// Core が Module に初期化を通知する時
Debug.Log("<color=#COLOR>[ModuleName]</color> <b>" + gameObject.name + "</b> 模块开始初始化。");
// 対象の値を更新する時
Debug.Log("<color=#COLOR>[ModuleName]</color> <b>" + gameObject.name + "</b> 正在更新值，目标: <b>" + Value + "</b>");
```

この書き方が推奨される理由：

- `<color>` : 色付けタグ : この `Module` のログを他のスクリプトのログと素早く区別するため
- `<b> + gameObject.name` : 太字タグ + `Module` をアタッチしたオブジェクト名 : 調査が必要なオブジェクトを素早く見つけるため
- `<b> + Value` : 太字タグ + 値 : 値の状態を強調表示するため