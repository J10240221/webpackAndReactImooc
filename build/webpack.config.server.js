const path = require('path');

module.exports = {
  target: 'node', // web...
  entry: {
    app: path.join(__dirname, '../client/server-entry.js'), // 告诉 入口，通过这个 形成这个依赖关系树
  },
  output: {
    filename: 'server-entry.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public', // /public  静态资源文件引用的路径 很重要，后期会更好理解
    libraryTarget: 'commonjs2', // 符合服务端
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
};
