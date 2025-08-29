const express = require('express')
const reqFilter = require('./middleware');

const app = express()

app.get('/' , reqFilter ,(req, res) =>{
    res.send("This Is Home Page")
})

app.get('/about' ,(req, res) =>{
    res.send("This Is About Page")
})

app.get('/contact' ,(req, res) =>{
    res.send("This Is Contact Page")
})

app.listen(200);
console.log("Server Is Running On Port 200")