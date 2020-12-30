function XO(str) {
    //code here
    var a=0;
    var b=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==o||str[i]==O){
            a++;
        }else if(str[i]==x||str[i]==X){
            b++;
        }else{
            break;
        }
    }
    if(a==b){
        console.log(true);
    }else{
        console.log(false);
    }
}
XO("ooxx");