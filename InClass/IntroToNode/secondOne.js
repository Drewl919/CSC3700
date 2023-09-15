let http = require("http");
let port = 8080;

console.log("")
http.createServer( function (res, req) {
    res.writeHead(200, {'Context-Type': 'text/html'});
    res.end("Hello World")
}).listen(port);