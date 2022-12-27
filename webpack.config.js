const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

// 导出webpack的配置对象
module.exports = {
  // webpack的入口
  entry: './src/index.js',
  output: {
    // path 必须用绝对地址 : path.resolve()拼接2个路径
    // __dirname: node内置全局变量（值：当前文件所在文件夹的绝对路径）
    path: path.resolve(__dirname, 'dist'),
    // webpack 出口文件
    filename: 'bundle.js',
  },
  // 插件
  plugins: [
    // 自动生成html
    new HtmlWebpackPlugin({
    title:'Wiess',
    template:'./public/index.html'
  })],
    // 加载器
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};