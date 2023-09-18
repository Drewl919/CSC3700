let http = require("http"); // load the http module
let url = require("url");
let fs = require('fs');
let port = 8080;
// let uc = require('upper-case')
http.createServer( function (req, res) {
    // console.log("REQ="); console.log(req)
    let q = url.parse(req.url, true);
    let fName = "." + q.pathname;
    fs.readFile(fName, function (err, data){
        if( err ){
            res.writeHead( 404, {'Content-type': 'text/html'});
            res.end(`Error File not found`);
        }
        res.writeHead( 200, {'Content-type': 'text/html'});
        res.write(data);
        res.end();
    })

}).listen( port )
console.log(`listening on http://localhost:${port}`)