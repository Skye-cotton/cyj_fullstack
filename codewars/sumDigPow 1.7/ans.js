function sumDigPow(a, b) {
    var ans = [];
    while(a <= b){
        //reduce()累加
      if(a.toString().split('').reduce((x,y,i)=>x + (+y) ** (i + 1),0) == a)
        ans.push(a);
      a++;
    }
    return ans;
  }
  console.log(sumDigPow(10,100));