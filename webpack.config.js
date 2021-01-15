//webpack 是node写出来的 node的写法
let path = require('path');
module.exports = {
  devServer:{ //开发服务器的配置
    port:3000,
    progress:true,
    contentBase:'./dist',
    open:true
  },
  mode:'development',  //两种模式，production: 生产环境 development：开发环境
  entry:'./src/index.js', 
  output:{
    filename:'bundle.js', //打包后的文件名
    path:path.resolve(__dirname,'dist'),  //路径必须是绝对路径
  }
}