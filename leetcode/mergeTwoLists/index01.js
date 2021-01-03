var mergeTwoLists = function(l1, l2) {
    var s=[];
    for(let i=0;i<l1.length;i++){
    if(l1[i]<=l2[i]){
        s[2*i]=l1[i];
        s[2*i+1]=l2[i];
    }else{
        s[2*i]=l2[i];
        s[2*i+1]=l1[i];
    }
    }
    return s;
};
console.log( mergeTwoLists([1,2,4],[1,3,4]));