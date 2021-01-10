var countBits = function(n) {
    // Program Me
    var a=[]
    var count=0
    a= n.toString(2)
   for(let i=0;i<a.length;i++){
    if(a[i]==1){
        count++
    }
   }
   return count
  };
  console.log(countBits(1234)); 
  
  