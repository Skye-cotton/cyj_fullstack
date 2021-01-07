// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// 89 = 8^1 + 9^2
function sumDigPow(a, b) {
    // Your code here
    var res=[]
    var arr,sum =0
    for(let i=a;i<=b;i++){
        arr=i.toString().split('').map(Number)
        sum=0;
        for(let j=0;j<arr.length;j++){
            sum +=Math.pow(arr[j],j+1)
        }
        if(i===sum){
            res.push(i)
        }
    }
    return res
  }
  console.log(sumDigPow(10, 100));