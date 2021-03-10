import React,{Component,Fragment} from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'

class Xiaojiejie extends Component{
    //在某一时刻，可以自动执行的函数
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['头部按摩','精油推背']
        }
    }
    // componentDidMount(){
    //     axios.post('https://juejin.cn/post/6936565736068513829')
    //         .then((res) =>{console.log('axios  获取数据成功' + JSON.stringify(res)); })
    //         .catch((error) =>{console.log('axios 获取数据失败' +error);})
    // }
   
    render() {
        // console.log('render----组件挂载中');//2
        return (
             <Fragment>
                 <div>
                     <label htmlFor="jspang">增加服务： </label>
                     <input
                      id="jspang"
                       className='input' 
                       value={this.state.inputValue} 
                       onChange={this.inputChange.bind(this)} 
                       ref = {(input)=>{this.input=input}}
                       />
                     <button onClick={this.addList.bind(this)}>增加服务</button>
                 </div>
                 <ul ref={(ul)=>{this.ul=ul}}>
                     {
                         this.state.list.map((item,index)=>{
                             return(
                                 <div>
                                     <XiaojiejieItem 
                                     key={index+item}
                                     content={item}
                                     index={index}
                                     deleteItem={this.deleteItem.bind(this)}
                                     />
                                 </div>
                             ) 
                         })
                     }
                 </ul>
                 <Boss />
             </Fragment>
        );
    }
    inputChange(){
        this.setState({
            inputValue:this.input.value
            
        })
        
    }
    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            value:''
        },()=>{console.log(this.ul.querySelectorAll('li').length);})
    }
    //删除列表项
    deleteItem(index){
        // console.log(index);
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default Xiaojiejie


// npm install axios(XXX)  //不会写入依赖
// npm install -g axios(XXX)     //  安装全局   
// npm install -save axios
// npm install -save-dev axios    dev