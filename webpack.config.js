//webpack 是node写出来的 node的写法
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devServer: {
    //开发服务器的配置
    port: 3000,
    progress: true,
    contentBase: "./dist",
    open: true,
  },
  mode: "production", //两种模式，production: 生产环境 development：开发环境
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash:8].js", //打包后的文件名
    path: path.resolve(__dirname, "dist"), //路径必须是绝对路径
  },
  plugins: [
    //数组，放着所有的weboack插件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
      hash: true,
    }),
  ],
  module: {
    //模块
    //loader:
    rules: [
      //规则   css-loader  解析@import这种语法
      //style-loader 他是把css 插入到head标签
      //loader特点  希望单一
      //loader 的用法 字符串只用一个loader
      //多个loader 需要[] 默认从右往左 从下往上
      //loader还可以写成对象方式
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
            // options: {
            //   insert: "top",
            // },
          },
          "css-loader", //解析路径
          "less-loader", //把less转成css
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            // options: { 
            //   insert: "top", //会导致less-loader失效 原因未知
            // },
          },
          "css-loader",
        ],
      }
      // { test: /\.js$/, use: [] },
    ],
  },
};
