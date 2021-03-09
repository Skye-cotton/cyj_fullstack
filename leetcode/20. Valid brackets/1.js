/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var p=[]
    if(s.length%2 != 0)return false;
    
    
    for(var i=0;i<s.length;i++){
        if(s[i] == '('||s[i] == '{'||s[i] == '['){
            p.push(s[i])
        }else if(p[p.length-1] + s[i] =='()'||p[p.length-1] + s[i] =='{}'||p[p.length-1] + s[i] =='[]'){
            p.pop()
        }else{
            return false
        }
    }
    return p.length==0
};

console.log(isValid('{)[]'));
// var isValid = function(s) {
//     if(s.length%2!=0)
//         return false;
//     let stack = [];
//     for(let i=0;i<s.length&&stack.length<=s.length/2;i++)
//     {
//         if(s[i]=='('||s[i]=='{'||s[i]=='[')
//             stack.push(s[i]);
//         else if(stack[stack.length-1]+s[i]=='()'||stack[stack.length-1]+s[i]=='[]'||stack [stack.length-1]+s[i]=='{}')
//             stack.pop();
//         else
//             return false;
//     }
//     return stack.length == 0;
// };
// console.log(isValid('{}()[]'));
