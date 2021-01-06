function queueTime(customers, n) {
    let temp = Array(n).fill(0)
    customers.map(item => {
      let idx = temp.indexOf(Math.min(...temp))
      temp[idx] += item
    })
    return Math.max(...temp)
  }
  console.log(queueTime([10,3,3,2],2));

  var num =[1,2,3,4];
  console.log(num.map(Math.min()));
