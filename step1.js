const fs = require('fs');

function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading the file: ${err.message}`);
    } else {
      console.log(data);
    }
  });
}

// Check if the user provided a file path argument
if (process.argv.length < 3) {
  console.error('Usage: node step1.js <file-path>');
  process.exit(1);
}

const filePath = process.argv[2];
cat(filePath);
