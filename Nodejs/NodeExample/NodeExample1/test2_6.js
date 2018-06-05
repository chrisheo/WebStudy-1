var calc2 = require('./calc2');

console.log('모듈로 분리한 후 - calc2.add : %d', calc2.add(10, 10));

var nconf = require('nconf');
var value = nconf.get('OS');
console.log('OS 환경변수의 값 : %d', value);