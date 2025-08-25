
const fs = require('fs');
const path = require('path');

const myCRUD = path.join(__dirname , 'CRUD');
const mypath = `${myCRUD}/crud.txt`;

// for create 
// fs.writeFileSync(mypath , 'Create , Read , Update , Delete');

// for read  
  // 1.
  // fs.readFile(mypath , 'utf8' , (err , item) =>{
  //     console.log(item);
  // })

    //   2.
    // fs.readFile(mypath , (err , item) =>{
    //     console.log(item.toString());
    // })
  
// for update
       
    
