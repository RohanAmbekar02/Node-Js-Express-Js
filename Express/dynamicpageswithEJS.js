const express = require('express');

const app = express()
app.set('view engine' , 'ejs');

app.get('/about/:name/:id' ,(req ,res) =>{
    const user = {
        name : req.params.name,
        id : req.params.id,
fav :   ['Cricket' , 'Music' , 'Movies']
    }
res.render('about' , {user})
 })

app.listen(1004);