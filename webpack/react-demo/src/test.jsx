import React from 'react'// es6 模块化引入
// page react 组件作为文件的最小单元  小程序组件概念一样
//React.Component  父类 匿名类
//module.exports  export default
export default class extends React.Component{
    // render 方法是每个react 组件必须实现的  接口
    //wxml
    render(){
        return(
            <p>测试一下</p>
        )
    }
}