var http = require("http");

http.createServer((req, res) => {
    console.log("req", req);
    res.write("welcome ragu http")
    res.end();

}).listen(8007)