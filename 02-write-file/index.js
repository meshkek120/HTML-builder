const fs = require("fs");
const { stdin, stdout } = process;
 
let toWrite = fs.createWriteStream("02-write-file/mytext.txt");

stdout.write('Enter the text\n')

stdin.on('data', data => {
    const inputText = data.toString();
    if (inputText.trim() === 'exit') {
        console.log('Done! Your file is ready.')
        process.exit();
    } else {
        toWrite.write(inputText);
    }
  });