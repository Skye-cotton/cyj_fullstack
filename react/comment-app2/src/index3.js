import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//函数式组件，类式组件 ，样式组件
class Header extends Component{
    constructor(){
        super()
        console.log('construct');//1
    }
    //即将挂载  jsx->react->createElement->appendChild mount 
    componentWillMount(){
        //ajax
        console.log('component Will Mount');//3
    }
    componentDidMount(){
        console.log('component Did Mount');//4
    }
    render(){
        console.log('render');//此时的render//2
        return (
            <div>
                <h1 className="title">
                    React 小书
                </h1>
            </div>
        )
    }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
