import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    // 性能优化
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
        
    }
    render() { 
        console.log('chile-render');
        return ( 
            <li onClick={this.handleClick}>{this.props.sname}--{this.props.content}</li>
         );
    }
    handleClick(){
        //单项数据流 子组件不能改变
        //更容易实现测试 函数式编程
        this.props.deleteItem(this.props.index)
    }
}
//类型校验
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
//默认值
XiaojiejieItem.defaultProps={
    sname:'呢呢'
}
export default XiaojiejieItem;