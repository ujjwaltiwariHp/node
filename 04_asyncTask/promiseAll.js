const { promises } = require("dns");

const fs = require("fs").promises;
async function readMultileFile() {
    try {
        const [file1,file2,file3]=await Promise.all(
            [
                      fs.readFile('file1.txt', 'utf8'),
                      fs.readFile('file3.txt', 'utf8'),
                      fs.readFile('file2.txt', 'utf8'),
            ]
        );
                    console.log("File 1:", file1);
                    console.log("File 2:", file2);
                    console.log("File 3:", file3);
        
    } catch (error) {
        console.log("Error in reading file",error);
        
        
    }
    
}
readMultileFile();