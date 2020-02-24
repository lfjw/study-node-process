const fs = require('fs')

setInterval(() => {
  fs.appendFileSync('1.txt', 'jw')
}, 1000);