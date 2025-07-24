const fs = require('fs').promises;

async function readFileAsync() {
  
  try {
    const data = await fs.readFile('data.txt', 'utf8');
    console.log("File content:", data);

  } catch (err) {
    console.error("Error:", err);
  }
}

readFileAsync();
