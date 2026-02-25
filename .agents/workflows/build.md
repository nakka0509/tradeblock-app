---
description: Trade Blockアプリのビルド・デプロイ手順
---

# Trade Block ビルド手順書

## 前提条件
- **Xcode** がインストール済み（バージョン15以上推奨）
- **Node.js / npm** がインストール済み
- **CocoaPods** がインストール済み（`sudo gem install cocoapods`）
- Apple ID でXcodeにサインイン済み

---

## 1. Webアセットの編集

ファイル:
- `web_preview.html` — ブラウザプレビュー用（開発確認用）
- `www/index.html` — 本番用（Capacitorが読み込むファイル）

> **重要**: 両ファイルは同じ内容を維持する必要があります。`web_preview.html` で確認後、変更を `www/index.html` にも反映してください。

### ブラウザでのプレビュー確認
```bash
open "/Users/syota/Desktop/Trade Block/web_preview.html"
```

---

## 2. iOS同期（Capacitor Copy）

Webの変更をiOSプロジェクトに反映します。

// turbo
```bash
cd "/Users/syota/Desktop/Trade Block" && npx cap copy ios
```

成功すると以下が表示されます:
```
✔ Copying web assets from www to ios/App/App/public
✔ copy ios
```

---

## 3. Xcodeでビルド

### 方法A: コマンドラインビルド
// turbo
```bash
xcodebuild -workspace "/Users/syota/Desktop/Trade Block/ios/App/App.xcworkspace" -scheme App -configuration Debug -destination 'generic/platform=iOS' build 2>&1 | tail -5
```

`** BUILD SUCCEEDED **` が表示されれば成功です。

### 方法B: Xcode GUIでビルド
1. Xcode でワークスペースを開く:
   ```bash
   open "/Users/syota/Desktop/Trade Block/ios/App/App.xcworkspace"
   ```
2. 上部のデバイスセレクタからビルド先を選択
3. `Cmd + B` でビルド、または `Cmd + R` でビルド＆実行

---

## 4. 実行先の選択

### シミュレータで実行
1. Xcodeの上部デバイスセレクタをクリック
2. **iOS Simulators** から `iPhone 15` 等を選択
3. ▶️（Play）ボタンをクリック

### 実機（iPhone）で実行

#### 初回セットアップ（USB必須）
1. iPhoneをUSBでMacに接続
2. iPhone側で「このコンピュータを信頼」をタップ
3. Xcodeメニュー → **Window > Devices and Simulators**
4. 接続されたiPhoneが表示されることを確認

#### Wi-Fiデバッグの有効化（初回のみ）
1. USBで接続した状態で **Window > Devices and Simulators**
2. デバイスを選択し **Connect via network** にチェック
3. チェック後はUSBを外してもOK

#### 署名設定（初回のみ）
1. Xcodeのプロジェクト設定 → **Signing & Capabilities**
2. **Team** で自分のApple IDを選択
3. エラーが出なければ準備完了

#### 実行
1. デバイスセレクタで自分のiPhoneを選択
2. ▶️（Play）をクリック

---

## 5. トラブルシューティング

| エラー | 対処法 |
|-------|--------|
| `No provisioning profiles` | Signing & Capabilities でTeamを選択し直す |
| `A build only device cannot be used` | シミュレータまたは実機を選択する（Any iOS Deviceではダメ） |
| `Pod install` エラー | `cd ios/App && pod install` を実行 |
| Webの変更が反映されない | `npx cap copy ios` を再実行 |

---

## 6. 一括ビルドコマンド（コピペ用）

Web同期 → ビルドを一発で実行:
// turbo
```bash
cd "/Users/syota/Desktop/Trade Block" && npx cap copy ios && xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Debug -destination 'generic/platform=iOS' build 2>&1 | tail -5
```
