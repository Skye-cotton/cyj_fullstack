var a = [[1,2,3],[1,5,7]]   ;  
num=0
 for(var i=0;i<a.length;i++){
     for(var j=0;j<a[i].length;j++){
         num +=a[i][j]
     }
     console.log(num);
     num=0
 }
 
// function sum(arr) {
//     return eval(arr.join("+"));
//   };
//   console.log(sum([1,2,3]));