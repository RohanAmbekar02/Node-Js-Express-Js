const http = require('http')

http.createServer((request, response) => {
 response.writeHead(200, {contextType: 'text/html'}); //for html  
 response.write("<h1>Hello World</h1>");
  response.write( "<img src=https://bpac.in/wp-content/uploads/2021/08/BlogsArtboard-1-copy-9.jpg>" );
  response.write("<p>This is a simple Node.js server response.</p>");
 response.end( );
}).listen(2004);


 // response.writeHead(200, { 'Content-Type': 'text/plain' }); // for plain text
// response.write("Hello World from createServer.js\n");

// response.writeHead(200, { 'Content-Type': 'application/json' }); // for JSON
// response.write(JSON.stringify({ message: "Hello World from createServer.js" }));


// ------   using function as arrgument   ----


// const  myFunction = (request, response) => {
//          response.writeHead(200, { 'Content-Type': 'text/plain' });
//          response.write(" createServer.js using function as argument");
//          response.end();
// }
// http.createServer(myFunction).listen(2004)
    