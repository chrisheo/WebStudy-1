console.log('ㅎㅇㅎㅇ');
console.log('숫자 %d', 10);
console.log('문자열 %s', '꺄륵');

var person = {
    name:"인직",
    age:29
};
console.log('자바스크립트 객체 %j', person);

console.dir(person);

console.time('duration_time');

var result = 0;
for (var i = 0; i < 10000; i++) {
    result += i;
}

console.timeEnd('duration_time');

console.log('파일 이름 : %s', __filename);
console.log('패스 : %s', __dirname);