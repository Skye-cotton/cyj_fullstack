function rgb(r, g, b){
    // complete this function  
    r=a(r);
    g=a(g)
    b=a(b)
    let arr=r.toString(16).toUpperCase()+g.toString(16).toUpperCase()+b.toString(16).toUpperCase()
    console.log(arr);
  }
function a(n){
    if(n>255){return n=255}
    else if(n<=0){return n='00'}
    else{return n}
}



  rgb(0,-0,-20)