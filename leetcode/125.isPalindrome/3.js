//正则加双指针
var isPalindrome = function(s) {
    var arr= s.replace(/\W|_/g,'').toLowerCase()
    // console.log(arr);
    let left=0;
    let right=arr.length-1
    while(left<right){
        if(arr[left] != arr[right]){return false}
        left++
        right--
    }
    return true
}


console.log(isPalindrome("A man, a plan, a canal: Panama"));

