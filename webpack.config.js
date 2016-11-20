// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map', //配置生成Source Maps, 是为了将源文件和bundle文件对应起来，方便调试
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
   loaders: [
     {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
   ]
 },
 plugins: [
   new HtmlWebpackPlugin({
     template: __dirname + "/public/index.html"
   }),
   new webpack.HotModuleReplacementPlugin()//热加载插件
 ],

  devServer: {
     contentBase: "./public",//本地服务器所加载的页面所在的目录
     colors: true,//终端中输出结果为彩色
     historyApiFallback: true,//不跳转
     inline: true, //实时刷新
     hot: true // 自动刷新实时预览修改后的效果
  }
}
