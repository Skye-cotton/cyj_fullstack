function solution(roman){
    // complete the solution by transforming the 
    // string roman numeral into an integer  
    var a=[]
    var v=0
    a=roman.split('')
    for(let i=0;i<a.length;i++){
        val =0;
        if(a[i]=='I'){val=1; }
        else if(a[i]=='I'){val=1;}
        else if(a[i]=='V'){val=5; }
        else if(a[i]=='X'){val=10; }
        else if(a[i]=='L'){val=50; }
        else if(a[i]=='C'){val=100; }
        else if(a[i]=='D'){val=500; }
        else if(a[i]=='M'){val=1000; }
        v +=val;
    }
    return v
  }
  console.log(solution('MMVIII')); 