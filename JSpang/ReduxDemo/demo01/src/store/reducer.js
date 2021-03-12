const defaultState={
    inputValue:'Write Something',
    list:[
        '考试全都过',
        '今年六月过四级',
        '找到实习工作'
    ]
}
export default (state=defaultState,action)=>{
    console.log(state,action);
    //Reducer 里只能接受state 不能改变state
    if(action.type === "changeInput"){
        let newState = JSON.parse(JSON.stringify(state)) //深拷贝   
        newState.inputValue=action.value 
        return newState                                                                                                                                             
    }
    return state
} 