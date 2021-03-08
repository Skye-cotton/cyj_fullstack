import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['头部按摩','精油推背']
        }
    }
    render() {
        
        return (
             <Fragment>
                 <div>
                     <label htmlFor="jspang">增加服务： </label>
                     <input id="jspang" className='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                     <button onClick={this.addList.bind(this)}>增加服务</button>
                 </div>
                 <ul>
                     {
                         this.state.list.map((item,index)=>{
                             return(
                                 <div>
                                     <XiaojiejieItem />
                                 </div>
                             ) 
                         })
                     }
                 </ul>
             </Fragment>
        );
    }
    inputChange(e){
        this.setState({
            inputValue:e.target.value
            
        })
    }
    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            value:''
        })
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