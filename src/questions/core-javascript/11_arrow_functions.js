var numbers = [1,2,3]

numbers.map(function(number){
    return number *2
})

// form 1
numbers.map((number) => {
    return number *2
})

//form 2 only one paramter

numbers.map(number => {
    return number *2
})

// var myFunction = numbers.map(number => {
//     console.log(number)
// })

//myFunction(1)

//form 2
// var myFunction = () => {
//     console.log(number)
// }

numbers.map(number => number * 2)


// Make this function print out the name defined in Person

function Person(name) {
    this.name = name
}

Person.prototype.sayNameTimed = function() {
    setTimeout(function() {
        console.log(`My Name is ${this.name}`)
    }, 1000)
}
// Person.prototype.sayNameTimed = function() {
//     setTimeout(() => {
//         console.log(`My Name is ${this.name}`)
//     }, 1000)
// }
var p1 = new Person('Tom')
p1.sayNameTimed()