const myfile  = require('fs');

// myfile.writeFileSync('Show.txt' , 'This is a demo file created using Node.js'); 

const path = require('path');
const myFolder = path.join(__dirname , 'myfolder')

for(let i = 0 ; i< 5 ; i++){
    myfile.writeFileSync(`${myFolder}/hello${i}.txt` , "This is File No" + i);
}

myfile.readdir(myFolder ,(err ,items) =>{
    // console.log(items);      
    items.forEach((file) => {
        console.log(file);
    })
})
