const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
console.log('isDev', isDev);

const config = {
  entry: {
    app: path.join(__dirname, '../client/app.js'), // 告诉 入口，通过这个 形成这个依赖关系树
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/', // /public  静态资源文件引用的路径 很重要，后期会更好理解(目前这样子，服务端可以正常访问，本地文件就不行，因为它并不在public文件下)
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

if (isDev) {
  config.entry = {
    app: ['react-hot-loader/patch', path.join(__dirname, '../client/app.js')], // 代码里面 插入 热更新 必须的代码
  };

  config.devServer = {
    host: '0.0.0.0', // === (localhost,127.0.0.1, 本机ip) 3 个都能访问
    port: 8888,
    contentBase: path.join(__dirname, '../dist'),
    hot: true, // 开启热更新
    overlay: {
      // 网站页面显示 黑色膜态框 + error
      errors: true,
    },
    publicPath: '/public/',
    // 由于是前端路由，玩意用户在某个前端路由时，刷新了，服务器不至于返回404，有默认的放回文件
    historyApiFallback: {
      index: '/public/index.html', // 404s will fallback to /public/index.html
    },
    // compress: true,
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
