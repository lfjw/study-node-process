// 改造 1.js 的服务

// 子进程优势
// 1 可以帮我们处理cpu密集型操作（例如sum.js计算数）
// 

const http = require('http');
const { spawn } = require('child_process')
const path = require('path');

http.createServer((req, res) => {
  if (req.url === '/sum') {
    let cp = spawn('node', ['sum.js'], {
      // 工作目录
      cwd: path.resolve(__dirname, 'test'),
      stdio: [0, 1, 2, "ipc"]
    })
    cp.on('message', function (data) {
      res.end(`total:${data}`)
    })
  } else {
    res.end('end ok')
  }
}).listen(3000);