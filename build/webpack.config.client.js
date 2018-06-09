const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, '../client/app.js'), // 告诉 入口，通过这个 形成这个依赖关系树
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public', // /public  静态资源文件引用的路径 很重要，后期会更好理解(目前这样子，服务端可以正常访问，本地文件就不行，因为它并不在public文件下)
  },
  module: {
    rules: [
      {
        test: /.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '../client/template.html'),
    }),
  ],
};
