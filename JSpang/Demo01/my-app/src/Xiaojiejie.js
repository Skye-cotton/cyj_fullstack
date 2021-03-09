import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
    //在某一时刻，可以自动执行的函数
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['头部按摩','精油推背']
        }
    }

   
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