var users = [{name:'김인직', age:20}, {name:'인직', age:22}];

console.log('배열원소의 개수 : ' + users.length);

users.push({name:'직', age:24});

console.log('배열원소의 개수 : ' + users.length);

var elem = users.pop();

console.log('배열원소의 개수 : ' + users.length);
console.log('pop으로 꺼낸 세번째 요소');

console.dir(elem);