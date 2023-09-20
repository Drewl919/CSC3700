const http = require("http");
const express = require("express");

const app = express();

let port = 3001;
app.use( "/add-product", (req, res) => {
    res.send( "<h2> Hello from add product </h2>");
})
app.use( "/add-product2", (req, res) => {
    res.send( "<h2> Hello from add product2 </h2>");
})
console.log(`List on http://localhost:${port}`);
app.listen( port );