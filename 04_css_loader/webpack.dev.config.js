// webpack ./main.js  ./build.js
module.exports = {
  // 入口
  entry: {
    // 可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始分析
    main: './main.js',
  },
  output: {
    filename: './build.js',
  },
  watch: true, //文件监视改动 自动产出build.js
  // 声明模块
  // 包含各个loader
  module: {
    loaders: [
      {
        // 遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件
        // 最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里。
        // webpack在打包过程中，遇到后缀为css的文件，就会使用style-loader和css-loader去加载这个文件。
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        loader: 'url-loader?limit = 3000', //图片的大小小于该值会采用base64加密，只加载一次，大于该值导致编码和html混在一起
      },
    ],
  },
}
