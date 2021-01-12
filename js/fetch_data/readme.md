# js 常考考点

- 要加一个用户怎么做？

es6/红宝书 你不知道的javascript leetcode 
单线程的语言， 数据通信相关
1. npm init -y
2. npm i json-server
    来个命令行，怎么启动db.json 成后台数据源?
    http server  3000/user db.json 作为数据源提供出来访问 后台准备好了
    http GET http://localhost:3000/users  users[]
    POST 保存表单 name->http://localhost:3000/users
3. db.json 数据文件
    json 是js前端和后端通信的数据文件
- promise  五星 异步
- postman 可以做http访问代理
    POST 很方便
- 前端+后端
    live-server http 前端服务 index.html 8080
    json-server 后端数据 1234
    前端和后端要数据通信？  
    前端去拉取后端的数据

- ajax 表达一下
    JS 最重要的考点 XTMLHttpRequest 对象
    1. 是历史性的突破，带来前端主动请求数据的能力，微博Ajax应用
    前端更主动， ajax+DOM 页面变得非常丰富，动态
    2.http://localhost:3000/users 一切皆资源 Restfull
    数据资源 GET 请求的动作 path/user []
    POST 新增的 /users {name:'陈玉珏'}
    3. XMLHttpRequest ActiveXObject("Microsoft.XMLHTTP")
    但是这叫做浏览器嗅探 if else
    let httpRequest；  http 协议 Request Response
    - 创建好对象
    - .open('GET',url,true)  打开一个请求通道
    .send()  这个请求真的就发送了
     .onreadystatechange 
      XMLHttpRequest.Done 完成了
      JSON.parse(httpRequest.responseText)  返回的数据
      json 数组 -> html 数组 map `<li>${user.id} - ${user.name}</li>` innerHTML .join()

