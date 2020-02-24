const cluster = require('cluster')
const cpus = require('os').cpus().length;
const http = require('http');

// 是不是主干
// 在集群模式下，可以监听同一个端口号
if (cluster.isMaster) {
  // 可以开启子进程，如果fork后会将此文件重新执行
  console.log('主干');
  for (let i = 0; i < cpus; i++) {
    cluster.fork()  //进程的用法
  }
  // 主进程 守护  某个子进程挂了，重启
  //保证项目的健壮性，一个挂了，可以重启
  cluster.on('exit', function (worker) {
    // 当前挂了的pid
    console.log('挂了的pid' + worker.process.pid);
    console.log('挂了重启中...');
    // 重启
    cluster.fork()
  })
} else {

  // 负载均衡 处理并发 貌似：1G、1核处理3000的并发
  http.createServer((req, res) => {
    //来测试一下
    if (Math.random() > 0.5) {
      aa()
    }
    res.end('分 process' + process.pid)
  }).listen(5050)
  console.log(process.pid);
}


/**
 *  主干分支如何通信
 */
// if (cluster.isMaster) {
//   for (let i = 0; i < cpus; i++) {
//     cluster.fork()
//   }
//   cluster.on('exit', function (worker) {
//     let child = cluster.fork() // 收集起来，放到数组中
//   })
// } else {
//   http.createServer((req, res) => {
//     res.end(process.pid)
//   }).listen(5050)
// }
