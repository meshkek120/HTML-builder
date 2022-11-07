const path = require('path');
const fs = require('fs');


const originalPath = path.join(__dirname, 'files')


//Create an empty folder
fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
    if (err) throw err;
    console.log('Folder has been copied');
});

const copiedPath = path.join(__dirname, 'files-copy')


//Copy original files
fs.readdir(originalPath, function (err, files) {
    if (err) {
        console.log(err);
    } 
    files.forEach(function (file) {
       const originalFilePath = originalPath + '/' + file,
        copiedFilePath = copiedPath + '/' + file

        fs.cp(originalFilePath, copiedFilePath, { recursive: true }, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
});