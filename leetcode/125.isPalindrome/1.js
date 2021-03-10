/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    var arr = s.toLowerCase().split('')
    if(arr.length==1){console.log(arr.length);}
    for(var i=0;i<arr.length;i++){
        if(arr[i] == ','||arr[i] == ':'){
            arr.splice(i,1)
        }
        if(arr[i] == ' '){
            arr.splice(i,1)
        }
    }
    // console.log(arr);
    arr1=arr.slice(0,arr.length/2);
    // console.log(arr1);
    arr2 = arr.slice(arr.length/2+1,arr.length).reverse()
    // console.log(arr2);
    if(arr1.toString()==arr2.toString()){
        return true
    }else{
        return false
    }
};
console.log(isPalindrome("A"));