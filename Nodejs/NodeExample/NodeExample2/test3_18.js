var person1 = {name : '김인직', age : 20};

var person2 = {name : '인직', age : 22};

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다.');  
};

var person3 = new Person('김인직', 20);
var person4 = new Person('인직', 22);

person3.walk(10);
