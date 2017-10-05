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


// 2) Are there any other ways of archieving this? 

// 3) In this code... 
var boundSayName = sayName.bind(p1, 'JavaScript Rocks') // create a new function entirely. Bound to the given arguements.
boundSayName()

 // What will this do?
boundSayName.apply(p2)
