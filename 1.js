
const http = require('http');
// 不是cpu密集，会导致其他请求会等待处理完成后在进行处理
// js webworker 子进程 child_process，处理后在将结果传送回来
// web端，i/o 接口的获取可以用node实现高并发
http.createServer((req, res) => {
  if (req.url === '/sum') {
    let total = 0;
    for (let i = 0; i < 10000000; i++) {
      total += i
    }
    res.end(`total:${tatal}`)
  } else {
    res.end('end ok')
  }
}).listen(3000);

// 先访问localhost:3000/sum
// 在访问localhost:3000/
// 出现问题，第一个不完成，第二个一直在等待