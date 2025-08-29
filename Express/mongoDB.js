const  express = require('express');
const connectdb = require('./db/db_connection')

const app = express();
connectdb();

const user  = require('./Models/userModel')

const adduser = async()=>{
     await user.create({
        name  : "Rohan",
        email : "rohan@gmail.com",
        password : "rohan1234",
     },
     {
        name  : "Srushti",
        email : "srushti@gmail.com",
        password : "srushti_13",
     }
    )
    }

    adduser();


 app.listen(5000, ()=>{
    console.log("Server is running at port 5000");
 })   