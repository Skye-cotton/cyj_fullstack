// APP的创建以及基本配置  中间件
// es6 module typescript => js
import express, { urlencoded } from 'express'
import postRouter from '../post/post.router'
import {defaultErrorHandler} from './app.middleware'

const app = express()
const bodyParser = require('body-parser')
// app 处于伺服状态eventEmitter
// 等
//body 加中间件  bodyParser 
app.use(bodyParser.urlencoded())

// 中间件来打理  函数
//所有的路由都在这里汇集
app.use( //函数
    //文章模块的路由 增删改查
    postRouter,
    //用户路由
    //.....
)
//处理各种错误
app.use(defaultErrorHandler)

export default app

