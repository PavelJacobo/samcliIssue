const db = require("/opt/nodejs/db");
const fs = require('fs');
const path = require('path');
// const db = require("/opt/nodejs/db");  // This Path does not exist

function listFilesAndDirectories(directoryPath) {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }
  
      files.forEach((file) => {
        const filePath = path.join(directoryPath, file.name);
  
        if (file.isDirectory()) {
          console.log('Directory:', filePath);
          listFilesAndDirectories(filePath); // Recursively call the function for subdirectories
        } else {
          console.log('File:', filePath);
        }
      });
    });
  }

exports.lambdaHandler = async (event, context) => {
    console.log(process.env.NODE_PATH, "NODE PATH NODE PATH");
    const directoryPath = '/opt';
    listFilesAndDirectories(directoryPath);
    console.log("Where is the Layer PAth?")
    return {
        statusCode: 200,
        body: {
            message: db.greeting("Hello World")
        }
    };
};