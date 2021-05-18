npm i babel-core babel-loader babel-plugin-transform-runtime babel-preset-env -D
注意版本问题
{
// 处理 es6,7,8
test: /\.js$/,
loader: 'babel-loader',
exclude: /node_modules/,
options: {
presets: ['env'], //处理关键字 es6,7,8
plugins: ['transform-runtime'], //处理函数
},
},
