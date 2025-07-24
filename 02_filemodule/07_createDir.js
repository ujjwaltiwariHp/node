const fs=require("fs")
fs.mkdir('myFolder', err => {
  if (err) return console.error(err);
  console.log('Folder created.');
});
