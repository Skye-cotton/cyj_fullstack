var findKthLargest = function(nums, k) {
    let arr=nums.sort(
        function(a,b){
            return a-b
        }
    )
    // console.log(arr);
    let res=0
    for(let i=0;i<k;i++){
        res=arr.pop()
        // console.log(res);
        
    }
    return res
    
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6],2)); 