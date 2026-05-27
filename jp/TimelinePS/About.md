---
prev: false
next:
  text: 'Timeline Text とは何ですか<br>何为 Timeline Text'
  link: 'jp/TimelinePS/TimelineText'
---

<p align="center">
<img src="https://booth.pximg.net/65f805ce-cafe-401a-8a59-17e2b7719def/i/8405950/7bdde5c0-c394-483e-9755-f052981bb57a_base_resized.jpg" alt="World Menu" width="512" height="512" />
</p>

---

- [简体中文](https://hrenact.net/TimelinePS/About)
- [English](https://hrenact.net/en/TimelinePS/About)

::: danger 翻訳について
翻訳はあくまで参考です！この翻訳はAIの支援によって作成されたものであり、曖昧な表現が含まれる可能性があります。[簡体字中国語](https://hrenact.net/TimelinePS/About) を基準としてください！
:::

::: warning 警告
このアセットは、すぐにそのまま使えるものではありません。正常かつスムーズにご利用いただくには、ある程度のUnity操作経験、U#プログラミングの知識、およびワールド構築プロセスへの理解が必要です。
:::

---

# Timeline Player System

Timeline Player System は、やや複雑な VRChat ワールド演出システムです。

その中で、ほとんどの **モジュール/Module** は、ファイル `*.lrc` 形式のタイムラインテキストに合わせて **コア/Core** 連携し、一連の操作を行うことで、非常にリッチな視覚効果を実現します。

- 以下は典型的な使用例です：

**一輪の花** にインタラクトすると、ワールドのBGMが徐々に消え、同時に音楽が流れ始め、空中に歌詞が一文ずつ表示されます。クライマックスではワールドの明るさが上がり、終盤近くで写真が表示され、曲の終了後には机の上に置かれた付箋メッセージが表示されます。

## 提供される機能

**TimelinePlayerSystem.zip** ：

名称 | 機能
-- | --
TimelinePlayerCore | - プレイヤー同期<br>- メインオーディオ `Music Source` の再生<br>- `Module` の検索と初期化<br>- `Module` への時間、再生、終了状態の伝達
ActiveModule | - 再生開始後、`Activate On Play` 内のオブジェクトを `有効化/無効化`<br>- 再生終了後、`Deactivate On Stop` 内のオブジェクトを `有効化/無効化`
DuckModule | - 再生開始後、`Background Source` の音量を一時的に下げる<br>- 再生終了後、`Background Source` の音量を復元する<br>- `Sync Slider` が指定されている場合、インタラクションを一時的に無効にする
ImageModule | - 再生開始後、`Timeline Text` から解析された時間と値に基づいて `Target Image` の透明度を自動調整する
LyricModule | - 再生開始後、`Timeline Text` から解析された時間と歌詞に基づいて `Text UI` のテキストを自動切り替えする
PostProcessModule | - 再生開始後、`Timeline Text` から解析された時間とウェイトに基づいて `Post Process Volume` のウェイトを自動調整する
VolumeModule | - 再生開始後、`Timeline Text` から解析された時間と音量に基づいて `Target Source` の音量を自動調整する

## サンプルワールド

以下はこのシステムを使用したワールドです。ご自由にご覧ください。

- [Timeline Player System Demo](https://vrchat.com/home/world/wrld_1d69386d-4d62-43e1-a86f-e7b1fda98f31/info)
- [.1 Room](https://vrchat.com/home/world/wrld_73bc1f16-70db-4cad-9246-17954cca1340/info)

::: tip 提示
コメント欄にあなたの作品のリンクを残していただければ、時間を見つけてプレイし、適切なマップをサンプルワールドに追加していきます。
:::