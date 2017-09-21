'use strict'

function Person(name, age) {
    this.name = name
    this.age = age
}

function Animal(name) {
    this.name = name
}

Person.prototype.sayName = function(message) {
    console.log('Hi ' + this.name)
    console.log('Message is ' + message);
}

var p1 = new Person('Tom', 37)
var p2 = new Person('Kimberley', 35)
var a1 = new Animal('Dog')

var sayName = p1.sayName

// 1) use the sayName function for any of p1. p2 or a1 (printing out a message)
sayName.call(p1,  'JavaScript Rocks!') // call has comma seperated arguments


// 2) Are there any other ways of archieving this? 
sayName.apply(p1, ['JavaScript Rocks!']) //apply has an array of arguments. 

// OR 
var boundSayName = sayName.bind(p1, 'JavaScript Rocks') // create a new function entirely. Bound to the given arguements.
boundSayName()


//3) What does the following do?
boundSayName.apply(p2)

/**
 * Hi Tom
Message is undefined
Hi Kimberley
Message is undefined
Hi Dog
Message is undefined
Hi Tom
Message is JavaScript Rocks!
Hi Tom
Message is JavaScript Rocks!
Hi Tom
Message is JavaScript Rocks
Hi Tom
Message is JavaScript Rocks
 */