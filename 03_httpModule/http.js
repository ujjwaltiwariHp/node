const http = require("http");

const server = http.createServer((req,res)=>{
    res.write('Response from server');
    res.end();
    
});

server.listen(3000,'localhost',()=>{
    console.log("Server started at localhost 3000");
    
});