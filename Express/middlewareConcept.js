const express = require('express');
const app = express()

const reqfilter = (req , res ,next) =>{
    const salary = req.query.salary;
    if(!salary){
        res.send("Please Provide Salary")
    }
    else if(Number(salary) < 50000){
        res.send("You salary is below 50000 , So You Cannot Access This Page")
    }
    else{
        next();
    }
}

app.use(reqfilter);

app.get('/',(req , res) =>{
    res.send("This Is Our Middleware Page")
})

app.get('/about',(req , res) =>{
    res.send("This Is Our About Page")
})

app.get('/contact',(req , res) =>{
    res.send("This Is Our Contact Page")
})

app.listen(1002 ,() => {
    console.log("Server Is Running On Port 1002")
})