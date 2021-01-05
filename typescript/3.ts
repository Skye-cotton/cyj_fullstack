
//interface 接口 设计模式 面向接口的编程
//user要满足一个接口
// 接口来定义方法和属性
interface IUser{
    name:String;
    age:number;

}
const getUserInfoWithInterface = (user:IUser)
:string =>{
    return `name:${user.name},age:${user.age}`;
}
getUserInfoWithInterface({name:'kolar',age:18})