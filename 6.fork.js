const http = require('http');
const { fork, execFile, exec} = require('child_process')
const path = require('path');

// fork 复制/克隆  相当于ipc， 

// http.createServer((req, res) => {
//   if (req.url === '/sum') {
//     // fork默认会加node 属性
//     let cp = fork('sum.js', {
//       cwd: path.resolve(__dirname, 'test')
//     })
//     cp.on('message', function (data) {
//       res.end(`total:${data}`)
//     })
//   } else {
//     res.end('end ok')
//   }
// }).listen(3000);



// let cp = fork('sum.js', {
//   cwd: path.resolve(__dirname, 'test'),
//   silent: false  默认 [0,1,2]      true  pipe
// })



// 如果只执行某个文件，可以使用fork




// spwan 可以读取大文件
// fork 可以使用ipc
// execFile  可以执行命令，核心基于spwan, 如果数据小于200kb，可以直接使用execFile
execFile('node', ['--version'], (err, stdout, stderr) => {
  console.log(stdout);
})


execFile('ls', ['-ll'], (err, stdout, stderr) => {
  console.log(stdout);
})


// 默认会启动shell ，再去执行脚本  模拟一个终端窗口
exec('ls -ll', (err, stdout, stderr) => {
  console.log(stdout);
})


// 如果执行node 脚本，而且获取内容,可以使用fork
// 如果执行命令  exec 

// webpack    devServer{ open:true } 打开浏览器

// sh xxx.sh 脚本

exec('open http://www.baidu.com', function (err, stdout, ) {
  
})

