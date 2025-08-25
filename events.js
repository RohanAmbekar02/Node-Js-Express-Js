
//   Built In Event Emiiter
// const fs = require('fs');

// // const myRead = fs.createReadStream('./input.js');
// const myRead = fs.createReadStream('./myFolder/hello1.txt');

// myRead.on('open',( ( )=>{
//     console.log("File is Opened")
// }))



// Customize Event Emitter 
const event  =  require('events');


const eventEmitter  = new event.EventEmitter();

eventEmitter.on('play' , (type) => {
      console.log ( `I am Playing  ${type}`)
})
eventEmitter.emit('play', "Batmintan");