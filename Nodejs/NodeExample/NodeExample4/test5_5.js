var http = require('http');
var fs = require('fs');

var server = http.createServer();

var host = '192.168.0.5';
var port = 3000;
server.listen(port, host, '50000', function() {
    console.log('웹서버가 실행되었슴다 -> ' + host + ':' + port);    
});

server.on('connection', function(socket) {
    console.log('클라이언트가 접속했슴다.');
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔슴다.');
    
    var filename = 'noname01.png'
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(data);
        res.end();
    });
    
    
});