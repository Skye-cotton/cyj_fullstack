/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // var a,b,c;
    // a=x/100;b=parseInt((x%100)/10);c=x%10;
    var ans;
    while(x!=0){
        var pop =x %10;
        if(ans>Number.MAX_VALUE/10 ||ans==Number.MAX_VALUE/10 && pop>7){
            return 0;
        }
        if(ans<Number.MIN_VALUE/10 || ans==Number.MIN_VALUE/10 && pop<-8){
            return 0;
        }
        ans=ans*10+pop;
        x/=10;
    }
    
    // return (ans)
    console.log(ans);
    };