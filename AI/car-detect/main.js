const AipOcrClient=require('baidu-aip-sdk').ocr;
//内置模块 fileSystem
const fs = require('fs');
const image = fs.readFileSync("ben01.jpg").toString("base64");
// 1. 读入文件 I/O  从硬盘读入内存中，
const APP_ID = "23078081";
const API_KEY ="YAyvrLUhlR0fRGYVqbiTANro"
const SECRET_KEY = "TxlmnqXUwgtlWvFilrFbaDZODRcN0ice"

const client = new AipOcrClient(APP_ID,API_KEY,SECRET_KEY);

const options ={}
options["multi_detect"] = "true"

client
    .licensePlate(image,options)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })