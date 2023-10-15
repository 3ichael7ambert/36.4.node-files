# NODE Intro File/URL Reader Project

This project consists of a series of Node.js scripts (`step1.js`, `step2.js`, `step3.js`, and `further.js`) designed to read and display the content of files and URLs, as well as write content to files. Additionally, there is a front-end version using HTML and JavaScript for a browser-based interface.

## Dependencies

1. **Node.js** - Ensure you have Node.js installed to run the Node.js scripts.
2. **Axios** - The `axios` package is required for making HTTP requests in the Node.js scripts.
3. **fs** - The `fs` package is required for making filesystems in the Node.js scripts.
4. **path** - The `path` package is required for making HTTP requests in the Node.js scripts

You can install the `axios` package by running the following command in your project directory:

```bash
npm install axios
npm install path
npm install fs
```

## Node.js Scripts

### `step1.js`

- **Description**: This script reads the content of a specified file and prints it to the console.
- **Usage**: Run the script using `node step1.js <file-path>`.
- **Dependencies**: None (uses built-in `fs` module).

### `step2.js`

- **Description**: This script reads the content of specified files or URLs and allows for optional output to a file.
- **Usage**:
  - To read and print a file or URL: `node step2.js <file-path-or-url>`.
  - To read and print with output to a file: `node step2.js --out <output-filename> <file-path-or-url>`.
- **Dependencies**: `axios` for making HTTP requests, and built-in `fs` module for file operations.

The script includes two functions:

- `cat(path)`: Reads and prints the content of a specified file or URL.
- `webCat(url)`: Fetches and prints the content of a specified URL.

The script determines whether the argument provided is a file path or a URL and calls the corresponding function accordingly.

If the provided argument is a URL (starts with 'http://' or 'https://'), it uses the `webCat` function to fetch and print the content. If it's a file path, the `cat` function is used to read and print the content.

The optional `--out` flag can be used to specify an output filename for writing the content to a file.

- **Example Usage**:
  - Read and print a file: `node step2.js file.txt`
  - Read and print a URL: `node step2.js http://example.com`
  - Read and print with output to a file: `node step2.js --out output.txt file.txt`

### `step3.js`

- **Description**: This script provides a versatile file and URL reading solution with options for outputting content to files. It features both a command-line interface and a front-end web version.
- **Usage**:
  - Command-line interface: `node step3.js [--out output-filename] <file-path-or-url> [<file-path-or-url> ...]`
  - Front-end web version: Open `index.html` in a web browser, use the provided form, and click the "Read/Write" button.
- **Dependencies**: `axios` for making HTTP requests and built-in `fs` module for file operations (Node.js version).

The script includes the following functions:

- `cat(path, outputFileName)`: Reads and prints the content of a specified file or URL. Allows optional output to a file.
- `webCat(url, outputFileName)`: Fetches and prints the content of a specified URL. Also supports optional output to a file.
- `writeToFile(filename, content)`: Writes content to a file with error handling.

The command-line interface accepts multiple arguments for processing in sequence. You can read and print the content of files or URLs, and optionally write the content to specified output files.

The front-end web version offers a user-friendly form for reading and writing content interactively.

- **Example Usage**:
  - Command-line: `node step3.js --out output.txt file.txt http://example.com`
  - Front-end web version: Open `index.html`, input file paths or URLs, specify an output filename, and click "Read/Write."

### `further.js`

- **Description**: This script extends the functionality of the project, enabling the processing of any number of file paths or URLs provided as command-line arguments. It offers enhanced versatility in handling content from various sources.
- **Usage**: Run the script using `node further.js [--out output-filename] <file-path-or-url> [<file-path-or-url> ...]`.
- **Dependencies**: None (uses `fs` for file operations and `axios` for HTTP requests).

The script builds upon the capabilities of `step3.js` and introduces the ability to process multiple file paths or URLs. It accepts an array of arguments, allowing you to read and print the content of multiple files or URLs in sequence.

You can specify an optional output filename for each argument, facilitating the efficient extraction and storage of content from different sources.

- **Example Usage**:
  - Process multiple files and URLs: `node further.js file1.txt http://example.com file2.txt --out output.txt`
  - Execute with different output filenames for each argument: `node further.js --out output1.txt file1.txt --out output2.txt http://example.com`

## Front-End Version (`index.html`)

- **Description**: An interactive, browser-based interface that allows users to read and display the content of files or URLs. It also offers the option to write the content to an output file if needed.
- **Usage**: Open `index.html` in a web browser, use the provided HTML form to input a file path or URL, specify an output filename (optional), and click the "Read/Write" button to perform the selected action.
- **Dependencies**: None (purely front-end).

The HTML file, `index.html`, provides a user-friendly form with the following features:

- Input Field: Users can enter a file path or URL.
- Output Field: Users can optionally specify an output filename.
- "Read/Write" Button: Clicking this button triggers the action.

The script within the HTML file processes user input and performs actions based on the provided input:

- If the input is a URL (starts with 'http://' or 'https://'), the script fetches the content, and users can choose to display it in the output area or save it as a file with the specified output filename.
- If the input is a file path, the script informs users that local file reading is not supported in the browser due to security restrictions.
- If no input is provided, the script prompts users to enter a file path or URL.

Please note that while the HTML and JavaScript code is provided, the front-end is not currently working.
