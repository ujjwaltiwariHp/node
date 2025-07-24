//reading synchronously
const fs = require("fs");
fs.writeFileSync('data.txt','Hello from Panda')

//reading Asynchronously
fs.writeFile('output.txt', 'Hello Node.js!', err => {
  if (err) return console.error(err);
  console.log('File written successfully.');
});
