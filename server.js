let http = require("http");

let server = http.createServer();

let fs = require("fs");

server.on("request", (request, response) => {
  fs.readFile("index.html", (err, data) => {
    if (err) throw err;
    response.writeHead(200, {
      "Content-type": "text/html ; charset=utf-8"
    });

    response.end(data);
  });
});

server.listen(8080);
