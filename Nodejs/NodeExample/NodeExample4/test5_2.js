var http = require('http');

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
    //console.dir(req);
    
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.write('<h1>웹서버로부터 받은 응답</h1>')
    res.end();
});