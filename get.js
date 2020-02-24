let http = require('http');




for (let i = 0; i < 50000; i++) {
  http.get({
    pathname: '/',
    hostname: 'localhost',
    port: 6060
  }, function (res) {
    res.on('data', function (data) {
      console.log(data.toString());
    })
  })
}






