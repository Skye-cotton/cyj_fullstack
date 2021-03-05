/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var  s= Math.max(l1.length,l2.length);
    var sum=0
    for(var i= 0;i<s;i++){
       sum += (l1.pop+l2.pop)*(i+1)
    }
    return sum;
};
// l1=[2,4,3]
// console.log(l1.reverse().join());//
console.log(addTwoNumbers([2,4,3],[5,6,4]));