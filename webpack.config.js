// @file config.js
var dest = './public/assets'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: true
  },

  // webpackの設定
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  }
  
}
