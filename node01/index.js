const http = require("http");
http
  .createServer((req, res) => {
    res.write("Hello this id aman");
    res.end();
  })
  .listen(4500);
