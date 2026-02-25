# Macでの iOS アプリビルド手順書

このフォルダーの内容を Mac に移し、以下の手順で Xcode プロジェクトを生成・実行できます。

## 1. 事前準備 (Mac)
Mac に以下のツールがインストールされていることを確認してください。
- **Node.js / npm**
- **Xcode** (App Store から入手)

## 2. 環境構築
ターミナルを起動し、プロジェクトフォルダーで以下のコマンドを実行します。

```bash
# 依存関係のインストール
npm install

# iOS プラットフォームの追加
npx cap add ios
```

## 3. アプリの起動・コンパイル
Xcode を起動して実機やシミュレーターで実行します。

```bash
# Xcode プロジェクトを開く
npx cap open ios
```

Xcode が開いたら：
1. 左上の「Runner」ターゲットを選択。
2. 「Signing & Capabilities」タブで、自分の Apple ID を選択（Team）。
3. 実行ボタン（▶マーク）を押して、シミュレーターまたは接続した iPhone でアプリを起動。

## 4. 更新時の手順
HTML ファイル (`www/index.html`) を修正した場合は、以下のコマンドで iOS 側に反映させます。

```bash
npx cap sync
```

---
> [!TIP]
> **アイコンの設定**: 
> Xcode 内の `AppIcon` 資産セットに画像をドラッグ＆ドロップすることで、ホーム画面のアイコンを変更できます。
