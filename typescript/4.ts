type IUserInfoFunc =(user:IUser)=>string
interface IUser{
    name:String;
    age:number
}
const getUserInfoWithType:IUserInfoFunc = (user)=>{
    return `name:${user.name}, age:${user.age}`;
}
getUserInfoWithType({name:'chen',age:21})