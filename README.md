# SSR モードの Nuxt.js を Firebase にデプロイ

[SSR モードの Nuxt.js を Firebase にデプロイ](https://qiita.com/okamuuu/items/c9f2989241af4a1bf588)

## 書いてあること

- Firebase で SSR するために必要な最低限の知識
- Nuxt.js を Express のミドルウェアとして動作させる方法
- Nuxt.js を Firebase にデプロイする時の注意点

## 要点

- サーバー起動: yarn run nuxt
- ビルド: yarn nuxt build
- 開発時: NODE_ENV=development node nuxt-server.js
- デプロイ前の動作確認: firebase serve --only functions:nuxtServer,hosting
- デプロイ: firebase deploy --only functions:nuxtServer,hosting
