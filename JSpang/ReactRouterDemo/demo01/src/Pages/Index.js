import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'小陈的个人博客-1'},
                {cid:456,title:'小陈的个人博客-7'},
                {cid:789,title:'小陈的个人博客-8'},
            ]
         }
         this.props.history.push("/home/")//编程式重定向
    }
    render() { 
        return(
            <>
            
            <h2>xiaochen</h2>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index}>
                               <Link to={'/list/'+item.cid}>
                                    {item.title}
                                </Link>
                            </li>   
                            
                        )
                    })
                }
            </ul>
            </>
        )
    }
}
 
export default Index;