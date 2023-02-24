const http = require('http');
const fs = require("fs"); // Use for reading files
const data = require('./sampleData.json'); // JSON file to use

// *** WEB SERVER SET UP ***
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// *** OTHER BACKEND ***
fs.readFile("sampleData.json", function(err, data) {
  if (err) throw err; // Check for errors
 
  // Convert to JS object and print
  const tickets = JSON.parse(data);
  console.log(tickets); // Print ticket information 
});