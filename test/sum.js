let total = 0;
for (let i = 0; i < 1000; i++) {
  total += i
}

console.log(total);

process.send(total)