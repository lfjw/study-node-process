
let { spawn } = require('child_process');

let path = require('path');

// node + 文件名 
let cp = spawn('node', ['3.a.js'], {
  cwd: path.resolve(__dirname, 'test'),
  stdio: [0, 1, "ipc"] // 可以通过message 和send 方法进行通讯
})

cp.on('message', function (data) {
  console.log(data);
})
