import React,{ Component } from 'react'
import datas from './data'
import { Layout } from 'antd';//布局 header +main+footer
import './TodoList.css'
import DataList from './component/DataList'
import Form from './component/Form'
const {Header,Content} =Layout

// warning  这种写法是老写法
// 类式组件被react-hooks  替代了  函数式编程
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state ={
            list:[]
        }
    }
    //数据驱动的页面
    //生命周期  react-hooks   name,setName=useState('defaultName)
    // ? 
    componentDidMount(){
        this.setState({
            list:datas
        })
    }
    deleteItem(id){
        // console.log('id');
        let deleteIndex =datas.findIndex(item =>{
            return item.id ===id
        })
        datas.splice(deleteIndex,1)
        this.setState({
            list:datas
        })
    }
    changeItem(id){
        let changeIndex = datas.findIndex(item =>{
            return item.id ===id
        })
        datas[changeIndex].isComplete=!datas[changeIndex].isComplete
        this.setState({
            list:datas
        })
    }
    handleSearchItem(value){
        let newList = datas.filter(item =>{
            return item.content.indexOf(value) !== -1
        })
        this.setState({
            list:newList
        })
    }

    render(){
        return (
            <Layout className="todolist-layout">
                <Header>

                <h3 className="logo">TodoList</h3>    
                </Header>
                <Content className="todolist-content">
                    <Form searchItem={value=>this.handleSearchItem(value)}/>
                <DataList list={this.state.list}
                changeItem={id=> this.changeItem(id)}
                deleteItem={id =>this.deleteItem(id)} />
                </Content> 
            </Layout>
        )
    }
}
export default TodoList