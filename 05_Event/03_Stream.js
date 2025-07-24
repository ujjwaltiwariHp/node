const fs = require('fs');
const readStream = fs.createReadStream('bigfile.txt', 'utf8');

readStream.on('data', chunk => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File read complete!');
});
