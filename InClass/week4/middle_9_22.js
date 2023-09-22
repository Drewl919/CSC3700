const http = require('http');
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Inside middle1");
  next();
});
app.use((req, res, next) => {
    console.log("Inside middle2");
});
let port = 3001;
const server = http.createServer(app);
server.listen(port);
console.log(`listening on http://localhost:${port}`);