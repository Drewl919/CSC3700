const http = require("http");

const player = require("./assets/players2.json");
console.log(player.description)
const port = 8080;
http.createServer(function (req, res) {
    console.log("---Started---")
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write( "<h2> The Names </h2>" );
    res.write( "<ol>" );
    player.nameList.forEach( p => {
        // console.log(p)
        res.write(`<li> ${p.firstName} ${p.lastName} ${p.occupation} </li>` );
    })
    res.write( "</ol>" );
    res.end();
}).listen(port);