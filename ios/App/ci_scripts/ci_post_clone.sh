#!/bin/sh

# エラー発生時にスクリプトを停止する
set -e

# Node.jsとCocoaPodsをHomebrewでインストール（Xcode Cloudの標準環境に合わせる）
export HOMEBREW_NO_AUTO_UPDATE=1
brew install node
brew install cocoapods

# プロジェクトのルートディレクトリに移動
cd ../../../

# Nodeモジュールのインストール
npm install

# Capacitorの同期（WebアセットのコピーとPodのインストールを自動でやってくれます）
npx cap sync ios

echo "ci_post_clone.sh successfully finished."
