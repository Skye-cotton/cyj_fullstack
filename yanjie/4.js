//es6提供的新的数据结构
//1. 为了数组的优化而来
//Set Map 两种数据结构  都是用来存放特定的数据集合的
const people = new Set();
people.add('陈玉珏');
people.add('呢呢');
people.add('小程');
people.add('呢呢');//{ '陈玉珏', '呢呢', '小程' }  不会重复添加
people.add('小熊');
for(const person of people){
    console.log(person);
}
// console.log(people);
const students = new Set(['小王','小谢','小夏'])
students.add('小支')
