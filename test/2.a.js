let total = 0;

for (let i = 0; i < 1000000000; i++) {
  total+= i
}

// 2
//console.log(total);
// 3 把数据写到了stdout 里面  stdout可写流
// string or buffer
process.stdout.write(total + '')
