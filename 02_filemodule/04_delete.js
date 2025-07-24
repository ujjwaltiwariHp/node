const fs = require("fs")
fs.unlink('output.txt', err => {
  if (err) return console.error(err);
  console.log('File deleted.');
});
