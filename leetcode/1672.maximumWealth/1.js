/**
 * @param {number[][]} accounts
 * @return {number}
 */

/**输入：accounts = [[1,2,3],[3,2,1]]
输出：6
 */
 var maximumWealth = function(accounts) {
   var sum= accounts.map(x=>{ return eval(x.join("+"))})
   return Math.max(...sum)
    
};
console.log(maximumWealth([[1,2,3],[3,2,1]]));