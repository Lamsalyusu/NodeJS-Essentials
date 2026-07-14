const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.method); // ---> GET,PUT,POST,DELETE
    console.log(req.url); // ---> /users , /products ,/login
    console.log(req.headers); // ---> {authorization:'bearer token...'}
});