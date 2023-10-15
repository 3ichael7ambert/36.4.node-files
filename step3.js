const fs = require('fs');
const axios = require('axios');
const path = require('path');

function cat(path, outputFileName) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${path}:\n  ${err}`);
    } else {
      if (outputFileName) {
        writeToFile(outputFileName, data);
      } else {
        console.log(data);
      }
    }
  });
}

function webCat(url, outputFileName) {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      if (outputFileName) {
        writeToFile(outputFileName, data);
      } else {
        console.log(data);
      }
    })
    .catch((error) => {
      console.error(`Error fetching ${url}:\n  ${error}`);
    });
}

function writeToFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error(`Couldn't write ${filename}:\n  ${err}`);
    } else {
      console.log(`Data written to ${filename}`);
    }
  });
}

// Check if a file path or URL argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node step3.js [--out output-filename] <file-path-or-url>');
  process.exit(1);
}

let outputFileName = null;
let argIndex = 2;

// Check if the --out option is used
if (process.argv[2] === '--out' && process.argv.length >= 4) {
  outputFileName = process.argv[3];
  argIndex = 4;
}

const arg = process.argv[argIndex];

if (arg.startsWith('http://') || arg.startsWith('https://')) {
  // If the argument starts with 'http://' or 'https://', treat it as a URL
  webCat(arg, outputFileName);
} else {
  // Otherwise, treat it as a file path
  cat(arg, outputFileName);
}
