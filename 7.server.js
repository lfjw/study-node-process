const http = require('http');


process.on('message', function (data, server) {
  // 所有人共用了同一个端口号 server 就是主进程创建的server
  http.createServer(function (req, res) {
    res.end('process:' + process.pid)
  }).listen(server)
  console.log('server start '+ process.pid );
  
})

