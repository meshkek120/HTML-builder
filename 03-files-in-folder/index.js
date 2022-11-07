// для файла, расположенного по адресу C:\Users\Admin\Desktop\nodejs-basic\index.js
const path = require('path');
const fs = require('fs');


const directoryPath = path.join(__dirname, 'secret-folder')

fs.readdir(directoryPath,{ withFileTypes: true }, function (err, files) {
    if (err) {
        console.log(err);
    } 
    files.filter(dirent => dirent.isFile()).map(dirent => dirent.name).forEach(function (file) {
        let filePath = directoryPath + "/" + file
        let fileSize = fs.statSync(filePath).size
        console.log(file.split('.')[0] + ' - ' + path.extname(file).slice(1) + ' - ' + fileSize + ' bytes'); 
    });
});