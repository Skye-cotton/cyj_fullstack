const express = require('express');
const app = express();

//这是什么？ process node 的内置的对象  进程  前端的window
//进程里，运行环境 env PORT  端口
//如何从env  拿到PORT 设置 ，默认4000

const port =process.env.PORT || 4000
console.log(process.env.PORT,'-----');
app.get('/', (req, res) => res.send("hello world，队长，你好"))

app.listen(4000, () => console.log(`Listing on port ${port}!`))