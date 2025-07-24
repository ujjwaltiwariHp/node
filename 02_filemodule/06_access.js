const fs = require("fs")
fs.access('new.txt', fs.constants.F_OK, err => {
  console.log(err ? 'File does not exist' : 'File exists');
});
