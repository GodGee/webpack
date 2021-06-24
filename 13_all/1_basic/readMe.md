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
