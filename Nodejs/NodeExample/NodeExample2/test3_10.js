var users = [{name:'김인직', age:20}, {name:'인직', age:22}, {name:'직', age:24}];

for(var i = 0; i < users.length; i++) {
    console.log('배열 원소 #' + i + ' : ' + users[i].name);    
}

users.forEach(function(elem, index) {
    console.log('배열 원소 #' + index + ' : ' + elem.name);
});