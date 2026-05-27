---
prev:
  text: 'Module とは何ですか<br>何为 Module'
  link: 'jp/TimelinePS/Module'
next: false
---

# 質問と回答

カバーされていない質問はコメント欄で提出できます。できるだけ答えるようにします。

## Q：Timeline Module が期待通りに動作しません

A：`Timeline Text` の時間形式が間違っている可能性があります：

正しい時間形式は以下の通りです。`秒` と `ミリ秒` の間は `:` ではなく `.` であることに注意してください

- `[` `分` `:` `秒` `.` `ミリ秒` `]`

別の可能性として、`Timeline Text` の値が範囲外である場合も考えられます：

- `LyricModule` はリッチテキストタグを含むあらゆる内容を受け付けます
- `VolumeModule` は 0～1 の間の値（例：0.75）のみを受け付けます
- 以下同様……

なお、時間と値の間にはオプションの **スペース** も含まれます：

- `[分:秒.ミリ秒]`+` `+`テキスト`

## Q：歌詞に「□□□」のような文字が表示される

A：これは、使用中の `Font Asset` にその文字のフォント情報が含まれていないためです。以下の手順で修正できます。

1. Unity ウィンドウの上部バー
2. Edit > Project Setting...
3. Project Setting ウィンドウ
4. 右上の検索ボックスに <Copy type="tip" text="Match Material Presets" toolTip="コピーしました" /> と入力
5. ハイライトされた `Match Material Presets` チェックボックスをオフにする

これにより、VRChat が不足しているフォント情報を引き継ぎ、VRChat のフォントを使って欠落したテキストを表示するようになります。

## Q：インポート後にコンソールでエラーが発生し、Unityが再生モードに入れない

A：プロジェクト内に `Post Processing` パッケージがまだインポートされていない可能性があります。インポートすれば解決します。

ポストプロセス関連の演出が不要な場合：<br>ディレクトリ `Assets\HrenactNET\TimelinePlayerSystem\Script\Module` に移動し、`PostProcessModule` フォルダを削除してください。