import {createStore,applyMiddleware,compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

 //增强函数
 const enhancer=composeEnhancers(applyMiddleware(thunk))

//store 是唯一的
const store=createStore(reducer,enhancer)
 
export default store  