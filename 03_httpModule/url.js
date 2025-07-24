// urlExample.js
const url = require('url');

const myURL = 'http://localhost:3000/about?name=ujjwal&age=23';

const parsed = url.parse(myURL, true);  

console.log(parsed.hostname);
console.log(parsed.pathname); 
console.log(parsed.query);   
