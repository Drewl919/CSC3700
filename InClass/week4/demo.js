let http = require('http');
let url = require('url');
let port = 8080;
console.log(`'listen on http://localhost:${port}`);
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true).query;
    let msg = "URL: <span style='color:red'> ";
    msg  += `Year:${q.year} Month:${q.month}`;
    if ( q.year == undefined) {
        msg += "<br /> Error: Year required"
    }
    if ( q.month == undefined) {
        msg += " <br /> Error: Month required"
    }
    res.end(msg);
}).listen(port);
console.log("----------Yo -----------");