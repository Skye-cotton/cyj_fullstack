//山月老师的面试，每天刷几道
//interface 接口 type 自定义类型 ts 的基础

export type User={
    name:string;
    age:number;
    occupation:string;
}  //自定义了一个类型unknown

export const users:unknown[]=[//ts 类型的约束，每个元素，满足
    {
        name:"陈玉珏",
        age:20,
        occupation:"Chimney sweep"
    },
    {
        name:"呢呢",
        age:20,
        occupation:"Astronaut"
    },
]

export function logPerson(user:User){
    //很放心， 满足User 上的定义
    console.log(`- ${user.name},${user.age}`)
}

console.log("Users:")