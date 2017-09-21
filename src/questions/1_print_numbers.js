//1) Print out all numbers in ths array.
var numbers = [1,2,3,4,6]

//non-functional 
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//ES5 
numbers.forEach(function(number) {
    console.log(number)
})

//functional - ES6 - 2015 
numbers.forEach((number) => {
    console.log(number)
})