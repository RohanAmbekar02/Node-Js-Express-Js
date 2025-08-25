const route = require('express');
const app = route();


// response 
// app.get('' , (req ,res) => {
//     res.send("Hello Express Js Good Morning Using Routing");
// })

// request 
app.get('/', (req ,res) => {
    const name = req.query.name;
    if(name){
        res.send(`Hello ${name} Welcome to My Website`);
    }
    else{
        res.send("Hello Express Js  Good Morning Using Routing")
    }
})

app.listen(2001 , () => {
    console.log("Server is running on port 2001");
})





