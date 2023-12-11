const express = require("express");
const app = express();
const candleRoutes = require("./routes/candles");

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( (req, res, next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use( bodyParser.urlencoded({extended: false}));
app.use( express.static( path.join(__dirname, 'public')));
app.use(candleRoutes.routes);

let port = 8000;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);