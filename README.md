# hideyuk1.dev

hideyuk1のポートフォリオサイト兼ブログです。

元々は個人サイトをWordPressで作成していましたが、Next.jsを使ったサーバレスの静的サイトとして新たに作り直しました。

<https://hideyuk1.dev>

## やっていること

- React / Next.js / TypeScriptで静的サイト出力
- UIライブラリにMaterial UI
- ブログ記事はMDXを利用（MarkdownにJSXが書ける）してGit管理
- お問い合わせフォームはAPI Gateway / Lambda / SESのサーバレス構成でメールが届くように設定
- S3でホスティング、キャッシュサーバーにCloudFront
- Route53でドメイン管理し、CloudFrontにルーティング
- ACMでSSL/TLS証明書発行、https化
- GitHubに変更があると、自動的にCodePipelineでビルド・デプロイされるように設定