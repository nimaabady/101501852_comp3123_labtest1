const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.join(__dirname, "./Logs"), {recursive: true});
for(let i = 0; i <= 10; i++){
    let fileName = "./Logs/logs" + i + ".txt"
    let fileDescription = "this is file " + i
    fs.writeFileSync(path.join(__dirname, fileName), fileDescription, 'utf8')
    console.log("creating file: " + fileName)
}
console.log("files created")

