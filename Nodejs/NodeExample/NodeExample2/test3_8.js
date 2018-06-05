var names = ['인직', '인..직', '인....직'];

var users = [{name:'인직', age:20}, {name:'인..직', age:22}];

users.push({name:'인....직', age:24});

console.log('사용자 수 : ' + users.length);
console.log('첫번째 사용자 이름 : ' + users[0].name);