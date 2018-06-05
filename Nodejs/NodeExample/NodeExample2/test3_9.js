var users = [{name:'김인직', age:20}, {name:'인직', age:22}];

var oper = function(a, b) {
    return a + b;
}

users.push(oper)

console.dir(users);
console.dir('세 번째 배열요소를 함수로 실행 : ' + users[2](10, 109))