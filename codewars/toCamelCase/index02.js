function toCamelCase(str) {
    var a;
    if( str.indexOf('-')==-1){
         a =/_(\w)/g
    }else{
         a =/-(\w)/g
        }
    // 形参$0表示正则的整体-(\w)，$1表示正则的第一个子项(\w)
        let b= str.replace(a,function ($0,$1) {
            return $1.toUpperCase();
    })
    return b;
}
console.log(toCamelCase('border-left-color'));
console.log(toCamelCase('border_left_color'));