const webp = require('webp-converter')

webp.cwebp("nh.jpg","output.webp","-q 80",function(status,error){
    console.log(status);
})