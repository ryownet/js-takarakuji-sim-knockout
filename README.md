# js-takarakuji-sim-vuejs
宝くじシミュレーター vueJS版

jQuery版を書き直すシリーズです
https://github.com/ryownet/js-takarakuji-sim

### ルール
- setting/data.json は変更しない
- それ以外はOK
- judge関数でくじ番号の当たり外れを照会します。ここを変えた場合はテストを通し、全てパスすること！

### 確認
- public/index.html を適当に開きます
- webサーバがない場合はhttp-serverも使えます

```
// ローカルサーバを立ち上げ
// http://localhost:8080/ で、public をカレントディレクトリに起動
$ npm run start
```

## とりあえず打つべきコマンド

```
// もろもろインストール
$ npm install

// CSSとJSを生成
$ npm run dest

// CSSとJSを生成しテストを実行
$ npm run make
```


## 必要に応じて打つコマンド

```
// css compile(scss -> css)
$ npm run css
```


```
// js compile(webpack)
$ npm run js
```

```
// js test
$ npm run test
```


## その他
- watchタスクは設定していません
- ビルドしたcss,jsはリポジトリに入れていません。コマンド打って生成してね



