var fs = require('fs');

var infile = fs.creteReadStream('./output.txt', {flags:'r'});

infile.on('data', function(data) { 
    console.log('읽어들인 데이터 : ' + data)
});

infile.end('end', function() {
    console.log('읽기 종료.');    
});