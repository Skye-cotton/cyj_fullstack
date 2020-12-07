// console.log('AI来了，酷！');

//node 引入模块的关键字  require
// 图像识别
const ApiImageClassifyClient=require('baidu-aip-sdk').imageClassify;
//内置模块 fileSystem
const fs = require('fs');

// 1. 读入文件 I/O  从硬盘读入内存中，
const APP_ID = "23077964";
const API_KEY ="pg26sLoVaPYmOy8w1Mn952jK"
const SECRET_KEY = "xix4CkKmbTdVXTD3Mxwk8QR56Y6kuudQ"

const client = new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
// const fs = require('fs');
const image =fs.readFileSync("daben02.jpg").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })


