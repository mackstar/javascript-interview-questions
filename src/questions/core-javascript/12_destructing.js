var numbers = [1,2,3]

var number1 = numbers[0]
var number2 = numbers[1]

var [numb1, numb2] = numbers

[number2, number1] = [number1, number2]

console.log(number1)
console.log(number2)


var dog = {
    name: 'Charlie',
    age : 12
}

var {name:name, age:age} = dog
console.log(name)
console.log(age)
