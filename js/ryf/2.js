/**
 * 
 * @author cyj
 * @param{any} o
 * @param{String} type
 * @return boolean
 */


const isTypeof = (o,type)=>{
    if(['number','boolean','function','string'].indexOf('type')>0)
    return typeof o === type ;
    
        // Object.prototype.toString.call(o).indexOf(type)>0
        return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0
    


}
// let a =1;
// let a =()=>{}
// let a=[1,2,3] 
let a=null;

// null array 是有问题的
console.log(isTypeof(a,"null"));
// console.log(a.constructor == Array);