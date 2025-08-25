                            //   Examples on Asynchronous 
 console.log('a');
setTimeout(()=>{
    console.log('b');
} ,3000)
console.log('c');


// let firstName = "Rohan";
// let lastname = "";
// setTimeout(()=>{
//    let lastname = "Ambekar";
// } ,4000)
// console.log(firstName + " " + lastname);
    
               
let firstName = "Rohan";
let lastname = "";

const setlastname = new Promise( (resolve, rejected)=>{
    setTimeout(()=>{
   lastname = "Ambekar";
    resolve(lastname);
} ,4000)
})

// setlastname.then( ()=>{
// console.log(firstName + " " + lastname);
// }) 

    // use async and await 
const display = async()=>{
   lastname = await setlastname;
    console.log(`${firstName} ${lastname}` );
}
display();