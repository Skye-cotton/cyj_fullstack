function sumIntervals(intervals){
    //TODO
    var numbers ={}
  intervals.forEach(function(x){
    for(var i =x[0];i<x[1];i++){
      numbers[i]=i
    }
  })
//   return Object.keys(numbers).length
return numbers
  }
console.log(sumIntervals( [1,2],[6, 10],[11, 15])); 