const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log('Home');
    res.send('hello world');
})
// app.listen(3003, () => {

// })
//export default
module.exports=app //common js