const fs = require('fs');
const axios = require('axios');

function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${path}:\n  ${err}`);
    } else {
      console.log(data);
    }
  });
}

function webCat(url) {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(`Error fetching ${url}:\n  ${error}`);
    });
}

// Check if a file path or URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node step2.js <file-path-or-url>');
  process.exit(1);
}

const arg = process.argv[2];

if (arg.startsWith('http://') || arg.startsWith('https://')) {
  // If the argument starts with 'http://' or 'https://', treat it as a URL
  webCat(arg);
} else {
  // Otherwise, treat it as a file path
  cat(arg);
}
