const dogs = new Map();//
const friends = new Map();
friends.set('陈玉珏','好好学习');
friends.set('小程','喜欢仔仔');

//遍历它  key  value

// console.log(friends.entries());
// friends.forEach((val,key) =>console.log((val,key)))
for (const [key,val] of friends){
    //解构  右边的赋值给左边  数组的解构赋值
    console.log(key,val);
}
const [a,b] =[1,2];
console.log(a,b);