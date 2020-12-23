


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans = Math.abs(x).toString().split("").reverse().join("");
    if(x < 0){
        return ans <= Math.pow(2,31) ? -ans : 0;
    }else{
        return ans < Math.pow(2,31) ? ans : 0;
    }
    };