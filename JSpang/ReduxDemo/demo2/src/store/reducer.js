const defaultState={
    inputValue:'write something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
} //默认数据

export default (state = defaultState,action)=>{
    if(action.type === "changeInput"){
        let newState = JSON.parse(JSON.stringify(state)) //深拷贝   
        newState.inputValue=action.value 
        return newState                                                                                                                                             
    }
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type === 'deleteItem'){
        let newState =JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}