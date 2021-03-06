var removeElement = function(nums, val) {

    for(var i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums.splice(i,1)
             i--//记得要i-- 删除当前元素，后面的元素下标都会前移，会减少一个元素的检验
        }
    }
    return nums.length
};
console.log(removeElement([3,2,2,3],3));