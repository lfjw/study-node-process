// 2.js内部的通讯方式不是也别方便，可通过ipc优化

let { spawn } = require('child_process');

let path = require('path');

// node + 文件名 
let cp = spawn('node', ['3.a.js'], {
  cwd: path.resolve(__dirname, 'test'),
  stdio: [0, 1, 2, "ipc"] // 可以通过message 和send 方法进行通讯
})

// 实现进程间通信，都用ipc方式，更为优雅
cp.on('message', function (data) {
  console.log(data);
  // 接收到消息，子进程退出
  //process.exit()
})


cp.send("我是主进程")


// 杀死进程 
// 会有一个问题，就是它会立马关掉，因为是异步的
//cp.kill()







