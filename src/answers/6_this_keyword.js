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
console.log(p1)

var p2 = new Person('Kimberley', 34)
console.log(p2)

p2.sayName()
p2.sayAge()

var name = p1.name
console.log(name)

var sayName = p1.sayName

sayName()

/* 
   behind the screens
   this = {}
   setup inher
   Using 'New' means function returns 'this'
   every new object would also have its own version of the sayName function

   lexical scope. 
*/
