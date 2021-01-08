//输入3   
// [
//     '  *  ', 
//     ' *** ', 
//     '*****'
//   ]
function towerBuilder(nFloors) {
    // build here
    var arr=['']
    for(let i=0;i<nFloors;i++){
        arr[i]=['']
        for(let k=0;k<nFloors;k++){
            arr[i] +=[' ']
        }
        
       for(let j=0;j<2*i+1;j++){
        arr[i] +=' *'
       }
    //    for(let a=0;a<nFloors;a++){
    //     arr[i] +=[' ']
    // }
        
       
    }
    return arr
  }
  console.log(towerBuilder(3));