'use strict'

function Person(name, age) {
    this.name = name
    this.age = age
    this.sayName = function() {
        console.log('Hello my name is ' + this.name)
    }
}

Person.prototype.sayAge = function() {
    console.log('Age is ' + this.age)
}

var p1 = new Person('Tom', 37)
var p2 = new Person('Kimberley', 34)

// 1) What will this print?
console.log(p1)

// 3) What will the following print?
p2.sayName()
p2.sayAge()

// 4) What will the following print?
var name = p1.name
console.log(name)

// 5 ) What will happen with the following code?
var sayName = p1.sayName
sayName()

// 6 When a new is used. What happens behind the screens?   

