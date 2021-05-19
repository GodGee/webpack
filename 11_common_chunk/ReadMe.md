chunk 存在的问题
两个入口文件都引入的公共文件和第三方库
编译成功后，dist文件夹下的两个文件都有公共文件和第三方库编译文件，公共模块重复打包，体积过大
未来index.html 加载main1.js mian2.js编译文件 公共文件和第三方库多次加载


分离  公共模块 第三方库 自定义模块

 entry: {
    // 可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始分析
    "main1": './src/main1.js',
    "main2": './src/main2.js',
    "vendor": Object.keys(packageJson.dependencies),//获取生产环境依赖的库
  },
  //第三方公共及公共的库抽离
 plugins:[
     new webpack.optimize.CommonsChunkPlugin({
       name:['vendor'],
       filename:'[name].js'
     }) 
  ]
  //增加 runtime 抽离webpack公共运行时
 name:['vendor','runtime'],//第三方及公共webpack的库抽离