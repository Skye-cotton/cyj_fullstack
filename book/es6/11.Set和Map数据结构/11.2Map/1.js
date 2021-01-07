const map = new Map()
//添加成员用set
map.set('foo',true)
map.set('bar',false)
//map 的size属性

console.log(map.size);//2
console.log(map[Symbol.iterator] === map.entries);
const map2 =new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
])
console.log([...map2.forEach]);