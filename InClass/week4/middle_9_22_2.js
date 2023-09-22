const http = require('http');
const express = require("express");
const app = express();

// Order matters
app.use('/home/baby', (req, res, next) => {
  res.send("<h2> Welcome Home Baby! </h2>");
});
app.use('/home', (req, res, next) => {
  res.send("<h2> Welcome Home! </h2>");
});
app.use('/', (req, res, next) => {
  res.send("<h2> Welcome to the rest of my stuff! </h2>");
});
let port = 3001;
const server = http.createServer(app);
server.listen(port);
console.log(`listening on http://localhost:${port}`);