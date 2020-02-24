// 子进程听从父进程的，父进程kill掉，子进程也会自动关闭，能不能写成父进程挂了，子进程依然可以跑

let { spawn } = require('child_process');

let path = require('path');

let cp = spawn('node', ['4.a.js'], {
  cwd: path.resolve(__dirname, 'test'),
  stdio: 'ignore', // 不共享输入输出
  detached: true,  // 独立的进程
})

// 父进程告诉子进程我放弃你了，此为重点
cp.unref()

// 子进程的pid
console.log(cp.pid);
