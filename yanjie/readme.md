1. 随机数
    Math.floor(2.6)  //2  向下舍
    Math.ceil(7.1)   //8  向上舍
    Math.round(25.1) //25 四舍五入

    //在最小值和最大值之间的随机数
    let max =100,
    min= 0;
    console.log(Math.floor(Math.random()*(max-min)+min)); 

2. Map 
3. Set
4. RegExp
    var reg =/(\d{4})-(\d{2})-(\d{2})/
    console.log(reg.test('0791-86-34')); 
    console.log(RegExp.$1);
    console.log(RegExp.$2);
    console.log(RegExp.$3); 