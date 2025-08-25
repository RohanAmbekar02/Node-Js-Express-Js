const express = require('express');
  const app = express();

  app.get('' , (req ,res) => {
    res.send("Hello Express Js Good Morning");
  })

  app.get('/contactus', (req , res)=>{
    res.send("This is Contact Us Page of My Website");
  })

   app.get('/aboutus', (req , res)=>{
    res.send("This is About Us Page of My Website");
  })

  app.listen(2000);

