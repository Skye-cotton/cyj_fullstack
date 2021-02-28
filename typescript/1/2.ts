
//数据是要类型化的，
// 拿着数据做一大波操作，为了不掉链子
interface User{
    name:string;
    age:number;
    occupation:string;
}  
interface Admin{
    name:string;
    age:number;
    role:string
}

export type Person=User|Admin;//普通用户和管理员
//自定义了一个类型unknown
//用户表里 有的用户是role 管理员8
export const users:Person[]=[//ts 类型的约束，每个元素，满足
    {
        name:"陈玉珏",
        age:20,
        occupation:"Chimney sweep",

    },
    {
        name:"呢呢",
        age:20,
        occupation:"Astronaut"
    },
    {
        name:'小程',
        age:21,
        role:"班委"
    }
]

export function logPerson(user:Person){
    console.log(`- ${user.name},${user.age}`)
    let additionalInformation:string
    // ? 类型推导就好
    // if((<Admin>user).role){
    if("role" in user){
        additionalInformation=(<Admin>user).role
    }else{
        additionalInformation=(<User>user).occupation;
    }
    console.log(`${user.name} ${user.age} ${additionalInformation}`)
}

users.forEach(logPerson)