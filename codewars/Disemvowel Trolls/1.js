//输入一个字符串str 去除里面的元音字母
function disemvowel(str) {
    var newstr=""
    

    for(let i=0;i<str.length;i++){
        if('aeiou'.includes(str.toLowerCase())){
            // console.log('123');
            continue;
        }else{
            newstr +=str[i]
        }
        // console.log(arr[i]);
    }
    
    return newstr;
  }
  console.log(disemvowel('welcome'));