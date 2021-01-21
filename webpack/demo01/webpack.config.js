const { Module } = require("webpack");

// 与parcel 的不同，配置繁琐
// npm run build webpack --mode=development
// 一定会去根目录下找到webpack.config.js 配置文件
// module node 模块化 commonjs module.exports
//import export es6   export default
module.exports={
    entry:'./main.js',//入口
    output:{//出口
        filename:'bundle.js'
    }
}