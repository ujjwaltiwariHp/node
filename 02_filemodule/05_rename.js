const fs = require("fs")
fs.rename('data.txt', 'new.txt', err => {
  if (err) return console.error(err);
  console.log('File renamed.');
});
