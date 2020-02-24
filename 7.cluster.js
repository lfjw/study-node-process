

// process -> cluster -> pm2

const { fork } = require('child_process')
// 我希望开启多个进程，监听同一个服务
// fork 不是开的越多越好，浪费空间大，速度慢 数量跟cpu数相同
const cpus = require('os').cpus().length

console.log(cpus);

// 我希望一个服务  启动在不同的cpu上，必须监听同一个端口
// 默认电脑是不支持同一个端口启动在不同的cpu上

const http = require('http');
let server = http.createServer(function (req, res) {
  res.end('process:' + process.pid)
}).listen(5050)

console.log('cluster ' + process.pid);

// 上面已经开启了一个
for (let i = 0; i < cpus - 1; i++) {
  let child = fork('7.server.js')
  // server名字固定，就是传入一个http服务
  child.send('7.server.js', server)
}



// http:localhost:5050 
// 保证性能的可靠性
// 实现使用多核cpu
// 负载均衡

// 上线开启多个进程



