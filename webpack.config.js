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
      title: 'Wiess',
      template: './public/index.html'
    })],
  // 加载器
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"],
      },
      // 处理less
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      // 处理图片
      {
        test: /\.(png|jpg|gif|jpeg)$/i, // 匹配图片文件
        type: 'asset' // 在导出一个 data URI 和一个单独的文件之间自动选择
      },
      // 识别字体文件
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',  // 当做静态资源直接复制文件
        generator: { 
          filename: 'font/[name].[hash:6][ext]' // 放到dist/font文件夹, 文件名格式如左
        }
      },
      // babel处理高等级的js语法
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};