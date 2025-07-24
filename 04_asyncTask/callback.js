const fs = require('fs');

fs.readFile('data.txt', 'utf8', function (err, data) {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("File content:", data);
});
