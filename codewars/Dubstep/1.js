function songDecoder(song){
    // ...
     var a = song.split("WUB")
    for(let i=0;i<a.length;i++){
        if(a[i]==''){
            a.splice(i,1);  
                  i= i-1; 
        }
    }
    return a.join(' ');
  }
  console.log(songDecoder("AWUBWUBWUBWUBBWUBC")); 