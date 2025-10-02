const fs = require('fs');
const path = require('path');

for(let i = 0; i < 10; i++){
    let fileName = "./Logs/logs" + i + ".txt"
    if(fs.existsSync(path.join(__dirname, fileName))){
        fs.unlinkSync(path.join(__dirname, fileName))
        console.log("delete files..." + fileName)
    } 
 }

 fs.rmdirSync(path.join(__dirname, "./Logs"))