//reading file synchronously
const fs = require("fs")
const data = fs.readFileSync('data.txt', 'utf8');
console.log("File content:", data);


//reading file Asynchronously
// const fs = require("fs")
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log("File content:", data);
});
