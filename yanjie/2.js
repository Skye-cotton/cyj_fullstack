function duplicateCount(word){
//用Map做   重复  重复多少次  JSONObject
let map ={};//使用了数据结构
let count = 0;
for(let i=0;i<word.length;i++){
let char = word[i];
if(char in map){
    count++
}else{
    map[char]=1
}
}
return count;
}
console.log(duplicateCount('aadsdjfwuhh')); 