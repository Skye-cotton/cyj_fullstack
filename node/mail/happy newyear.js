//require  关键字 ，引入库
//  const fs = require('fs');//文件系统  内置模块
const nodemailer = require('nodemailer')// 第三方库，安装的

// 模块 语法 ->函数模块化 -> module(水电工、木工...)
// 现代语言中，一个文件就是一个模块
// const modA = require('./a.js');//相对地址
// console.log(modA.add(1,2)); 
// fs.readFile('./readme.md',function(err,res){
//     if (err) {
//         throw new Error(err);
//     }
//     console.log(res.toString());
// })

//async  + await
//异步函数
// 把土味的情话 封装起来
function getHoneyedWords() {
    // const url ='https://chp.shadiao.app/api.php';
    // return Axios.get(url);
}
// 把发邮件这件事，封装给一个函数
async function sendMail(){
    let user ="362535698@qq.com"
    let pass ="nfzhwhaojbzkcaeg";//授权码
    let to="1415830694@qq.com";
    let transporter=nodemailer.createTransport({
        host:"smtp.qq.com",
        port:587,
        secure:false,
        auth:{
            user:user,
            pass:pass
        }
    });
    let info =await transporter.sendMail({
        from:`爱你的捏捏<${user}>`,//sender address
        to:`美丽可爱大方的小姨<${to}>`,
        subject:"新年祝福",
        text:'祝小姨新年快乐，身体健康天天开心！钞票多多，心想事成'
    })
    console.log("发送成功");
}

sendMail()