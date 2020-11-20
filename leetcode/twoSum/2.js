/**
 * @author cyj
 * @date 20-11-20
 * @param{number[]} nums
 * @param{number} target
 * @return{nunmber[]} 
 * 
 */
// 箭头函数
 const twoSum = (nums,target) => {
    // console.log('两数相加');
    let map = {};//JSON Object HashMap
    let res = [];
    //编写功能  一个函数完成 一个功能
    //es6更简洁
    //callback
    //for + 执行功能
    nums.forEach((e,i) => map[e] = i);//O(n) 以空间换时间 空间复杂度的花销O（n）
    console.log(map);
    for(let i = 0;i<nums.length;i++){  //O(n)
        let j = map[target-nums[i]];//undefind
        if(j && j !== i){
            res = [i,j];
            break;
        }
    }
    return res;
 }

 console.log( twoSum([2,7,11,15],9));