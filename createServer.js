const http = require('http')

// http.createServer((request, response) => {
//  response.writeHead(200, {contextType: 'text/html'}); //for html  
//  response.write("<h1>Hello World</h1>");
//  response.end();
// }).listen(2004);


 // response.writeHead(200, { 'Content-Type': 'text/plain' }); // for plain text
// response.write("Hello World from createServer.js\n");

// response.writeHead(200, { 'Content-Type': 'application/json' }); // for JSON
// response.write(JSON.stringify({ message: "Hello World from createServer.js" }));


// ------   using function as arrgument   ----


const  myFunction = (request, response) => {
         response.writeHead(200, { 'Content-Type': 'text/plain' });
         response.write(" createServer.js using function as argument");
         response.end();
}
http.createServer(myFunction).listen(2004)
    