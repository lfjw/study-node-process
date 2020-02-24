
// 产生子进程
// 自带模块
// spawn 产卵的

// 每次执行此文件，会产生一个子进程，子进程内部又一个主线程

// 默认进程之间不能通信
let { spawn } = require('child_process');

let path = require('path');

// node + 文件名 
let cp = spawn('node', ['2.a.js'], {
  cwd: path.resolve(__dirname, 'test'),
  // 1
  //stdio: 'ignore', //忽略子进程中的输出
  // 2 忽略 0 1 2 相当于2 忽略进程之间通讯
  // process.stdin 监听用户输入  【标准输入】 console.log   计算中0 代表
  // process.stdout 输出  相当于http 的res【标准输出】      计算中1 代表
  // process.stderr  console.error() 【错误输出】         计算中2 代表
  // 共享了父进程的输入/ 输出
  // 只能打印日志，但是我希望获取a的值
  //stdio: [process.stdin, process.stdout, process.stderr],
  // 3 子进程父进程通过管道通信
  stdio: ['pipe', 'pipe', 'pipe'] // 另一种写法：'pipe'
  // 4 默认  pipe
  //stdio: "inherit" 
})

// test/a/js  process.stdout.write(total) 方法写入这个子进程的输入
cp.stdout.on('data', function (data) {
  console.log(data + '');
})

// 进程可能异常
cp.on('error ', function (error) {
  console.log(error, '---')
})

// 关闭进程
cp.on('close', function () {
  console.log('close');
})

// 退出进程
cp.on('exit', function () {
  console.log('exit');
})
