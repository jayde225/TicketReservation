var http = require('http');
var fs = require("fs"); // Use for reading files
var data = require('./database/sampleData.json'); // JSON file to use
// *** WEB SERVER SET UP ***
var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
// *** OTHER BACKEND ***
fs.readFile("./database/sampleData.json", function (err, data) {
    if (err)
        throw err; // Check for errors
    // Convert to JS object and print
    var tickets = JSON.parse(data);
    console.log(tickets); // Print ticket information 
});
