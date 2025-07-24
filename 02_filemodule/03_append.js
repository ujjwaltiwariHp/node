const fs = require("fs")
fs.appendFile('output.txt', '\nNew line added!', err => {
  if (err) return console.error(err);
  console.log('Content appended.');
});
