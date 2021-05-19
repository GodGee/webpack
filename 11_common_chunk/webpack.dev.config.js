var path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack  = require('webpack')

const packageJson = require('./package.json')

// webpack ./main.js  ./build.js
module.exports = {
  // 入口
  entry: {
    // 可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始分析
    "main1": './src/main1.js',
    "main2": './src/main2.js',
    "vendor": Object.keys(packageJson.dependencies),//获取生产环境依赖的库
  },
  output: {
    path: path.resolve('./dist'), //相对转绝对
    filename: '[name].js',
  },
  watch: true, //文件监视改动 自动产出build.js
  plugins:[
     new webpack.optimize.CommonsChunkPlugin({
       name:['vendor','runtime'],//第三方及公共的库抽离
       filename:'[name].js'
     }) 
  ]
}
