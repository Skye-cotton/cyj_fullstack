import {fromJS} from 'immutable'
import * as actionTypes from './contants'
const defaultStatus=fromJS({
    userInfo:{},
    loginStatus:false
})

export default (state=defaultStatus,action)=>{
    switch(action){
        case actionTypes.CHANGE_LOGIN_STATUS:
            return state.set("loginStatus",action.data)
        case actionTypes.CHANGE_USER_INFO:
            console.log(action,'+++++++++')
            return state.set('userInfo',action.data)
        default:
            return state
    }
}