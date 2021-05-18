npm i webpack-dev-server -D

"dev": "webpack-dev-server --open --hot --inline --config ./webpack.dev.config.js",
--open 自动打开浏览器
--hot 热更新，不在刷新的情况下，替换 css 样式
--inline 自动刷新
--port 8888 指定端口
--process 显示编译进度
