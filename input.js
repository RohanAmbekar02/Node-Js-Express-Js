console.log(process.argv[2]);

const fs  = require('fs');

const action = process.argv[2];
const fileName = process.argv[3];
const data = process.argv[4];
const read = process.argv[5];

if(action == 'create'){
    fs.writeFileSync(fileName , data)
}
else if(action == 'delete'){
    fs.unlinkSync(fileName);
}
else if(action == 'read'){
    fs.readFileSync(fileName  );  
}
else{
    console.log(" Invalid Action");
}