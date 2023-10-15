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

// Check if the --out option is used
const outIndex = process.argv.indexOf('--out');

if (outIndex >= 0 && outIndex + 1 < process.argv.length) {
  const outputFileName = process.argv[outIndex + 1];
  const args = process.argv.slice(2, outIndex).concat(process.argv.slice(outIndex + 2));

  processArgs(args, outputFileName);
} else {
  const args = process.argv.slice(2);
  processArgs(args);
}

function processArgs(args, outputFileName = null) {
  if (args.length === 0) {
    console.error('Usage: node step3.js [--out output-filename] <file-path-or-url> [<file-path-or-url> ...]');
    process.exit(1);
  }

  args.forEach((arg) => {
    if (arg.startsWith('http://') || arg.startsWith('https://')) {
      // If the argument starts with 'http://' or 'https://', treat it as a URL
      webCat(arg, outputFileName);
    } else {
      // Otherwise, treat it as a file path
      cat(arg, outputFileName);
    }
  });
}
