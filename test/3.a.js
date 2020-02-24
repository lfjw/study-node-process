let total = 0;

for (let i = 0; i < 100000000; i++) {
  total+= i
}

console.log('hello');

// 可传递数的形式
process.send(total)


process.on('message', function (data) {
  console.log(data,'子进程');
  console.log('进程id', process.pid );
  
  
})
