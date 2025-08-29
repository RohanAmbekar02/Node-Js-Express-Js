const route = require('express');
const app = route();

app.get('' ,(req, res) =>{
    res.send(` <h1> This is Home Page </h1>
           <h1>  <a href="/contact">Contact Page</a> </h1>
           <h1> <a href="/about"> About Page</a><br><br></h1> 
               
        <input type="text" placeholder="Enter Your Name" /><br><br>
        <input type="submit" value="Submit" />
  
        `)
})

app.get('/contact' , (req ,res) =>{
   res.send(`<h1> This is Contact Page </h1>`)
})

app.get('/about' , (req ,res) =>{
   res.send(
 
      [
            { name :"Rohan"  , city : "Pune"},
            { name :"Sanika"  , city : "Mumbai"},
            { name :"Srushti"  , city : "Nagpur"},
            { name :"Nandu"  , city : "Delhi"}

            
   ])
   

})

app.listen(2003 , () => {
    console.log("Server is running on port 2003");
})





