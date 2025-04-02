const http = require("http");

const fs = require("fs");

console.log("This will run after the file is read.");

http
  .createServer((req, res) => {
    console.log("req", req);
    console.log("res", res);

    res.writeHead(200, { "content-type": "text/plain" });

    const data = fs.readFileSync("../file.txt", "utf8");
    res.end(data);
  })
  .listen(8080);
