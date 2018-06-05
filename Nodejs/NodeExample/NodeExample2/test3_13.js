var users = [{name:'김인직', age:20}, {name:'인직', age:22}, {name:'직', age:24}];

delete users[1];

console.dir(users);

users.forEach(function(elem, index) {
    console.log('원소 #' + index);
    console.dir(elem);
})

users.splice(1, 0, {name:'만멘', age:25});
console.dir(users);

users.splice(2, 1);
console.dir(users);