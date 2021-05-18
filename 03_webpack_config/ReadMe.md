新建 webpack.config.js 基于 node commonjs module.exports 可有一个或多个入口
执行 webpack

可以配置文件名 需要在 package.json 配置
webpack.dev.config.js webpack --config webpack.dev.config.js
webpack.prod.config.js webpack --config webpack.prod.config.js

"dev":"webpack --config ./webpack.dev.config.js", npm run dev
"prod":"webpack --config ./webpack.prod.config.js" npm run prod
