/**
 * 功能：获得唯一ID
 * @author cyj
 * @date 20-11-21
 * @returns{string}
 */
// const uniqueID = () =>{
//     let t = + new Date();//类型转换
//     let ranNum = Math.ceil(Math.random()*1000);
//     return  t + ""+ ranNum;
// }
const uniqueID = () => + new Date() + "" + Math.ceil(Math.random()*1000)
   


console.log(uniqueID());