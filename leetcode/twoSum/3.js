const numbers = [2,56,5,4,6,125,45,19,74,98];
const arr= [];
// const LargeNumbers = numbers.forEach((e,i) => {
//     if (e > 70) {
//         arr.push(e);
//     }
// })
//forEach 基础上
//filter内置对象
const cb = number => {
    return number > 70
}
const LargeNumbers=numbers.filter(cb)
console.log(LargeNumbers);