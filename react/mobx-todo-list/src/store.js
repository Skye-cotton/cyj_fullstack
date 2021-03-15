import { makeAutoObservable } from 'mobx'

class AppStore{
    constructor(){
        makeAutoObservable(this)
    }
    todos=[
        {id:0,title:"todo标题",done:true},
        {id:1,title:"已经完成todo的标题",done:false}
    ]
    changeFinished(id){
        const list = this.todos.filter((item,index)=>item.id == id)
        // console.log(list);
        list[0].done = !list[0].done
    }
}
export default new AppStore()