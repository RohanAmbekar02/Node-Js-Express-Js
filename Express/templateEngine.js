const express = require('express')
const app =  express()

app.set('view engine' , 'ejs');
// using  static
// app.get('/welcome' ,(req ,res) =>{
//     res.render('Welcome')
// })

// using dynamic 
app.get('/welcome' ,(req ,res) =>{
      const user = {
        name : "Shree",
        city : "Pune"
      }
    res.render('Welcome' , {user})
})

app.listen(1002);
