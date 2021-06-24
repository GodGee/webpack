npm i -D html-webpack-plugin 配置 html 模板
npm i -D clean-webpack-plugin 清空上次打包残留的文件
npm i -D style-loader css-loader 解析 css 文件
npm i -D less less-loader 解析 less 文件
npm i -D postcss-loader autoprefixer 为 css 添加浏览器前缀
npm i -D mini-css-extract-plugin 拆分 css
npm i -D file-loader 将文件在进行一些处理后（主要是处理文件名和路径、解析文件 url），并将文件移动到输出的目录中
npm i -D url-loader 如果文件小于限制的大小。则会返回 base64 编码，否则使用 file-loader 将文件移动到输出的目录中
npm i -D babel-loader @babel/preset-env @babel/core 为了使我们的 js 代码兼容更多的环境我们需要安装依赖
npm i @babel/polyfill babel-loader 只会将 ES6/7/8 语法转换为 ES5 语法，但是对新 api 并不会转换 例如(promise、Generator、Set、Maps、Proxy 等)要借助 babel-polyfill 来帮助我们转换

npm i -D vue-loader vue-template-compiler vue-style-loader vue-loader 用于解析.vue 文件 vue-template-compiler 用于编译模板  
npm i -S vue
npm i -D webpack-dev-server 配置 webpack-dev-server 进行热更新

webpack.dev.js 开发环境配置文件 开发环境主要实现的是热更新,不要压缩代码，完整的 sourceMap

webpack.prod.js 生产环境配置文件 生产环境主要实现的是压缩代码、提取 css 文件、合理的 sourceMap、分割代码
需要安装以下模块:
npm i -D webpack-merge copy-webpack-plugin optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin

webpack-merge 合并配置
copy-webpack-plugin 拷贝静态资源
optimize-css-assets-webpack-plugin 压缩 css
uglifyjs-webpack-plugin 压缩 js

webpack mode 设置 production 的时候会自动压缩 js 代码。原则上不需要引入 uglifyjs-webpack-plugin 进行重复工作。但是 optimize-css-assets-webpack-plugin 压缩 css 的同时会破坏原有的 js 压缩，所以这里我们引入 uglifyjs 进行压缩
