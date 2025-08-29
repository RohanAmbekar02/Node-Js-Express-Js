const http = require('http');
const data = require('./empData.js');

http.createServer((request , response) =>  {
    response.writeHead('200', { 'Content-Type': 'application/json' })

    // response.end(JSON.stringify(
    //     [
    //         { name: 'Rohan', age: 21, city: 'Pune' },
    //         { name: 'Ranveer', age: 30, city: 'Mumbai' },
    //         { name: 'Nitya', age: 26, city: 'Pune' },
    //     ]
    // ));
    
response.end(JSON.stringify(data));
}).listen(2004);
