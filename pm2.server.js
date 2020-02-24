const http = require('http');

http.createServer(function (req, res) {
  res.end('idprocess:' + process.pid)
}).listen(6060)
