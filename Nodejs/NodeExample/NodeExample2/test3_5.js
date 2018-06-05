var person = {};

person.name = '김인직';
person['age'] = 20;
person.add = function(a, b) {
    return a + b;
};

console.log('더하기 : ' + person.add(10, 10));
