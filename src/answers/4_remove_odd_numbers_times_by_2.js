//Remove all the odd numbers from this array and times by 2 

// Notes
// look for chaining of functions as opposed to individually

var numbers = [1,2,3,4,5]

//non functional
var evens = []
for (var j = 0, i = 0; i < numbers.length; i++ ){    
    if (numbers[i] % 2 == 0) {
         evens[j] = numbers[i] * 2
         j++
    }
}
console.log(evens)

//functional
evens = numbers.filter(function(number) {
    return number % 2 == 0
}).map(function(number) {
    return number * 2
})
console.log(evens)

//functional ES6
evens = numbers.filter((number) => {
    return number % 2 == 0
}).map((number) => {
    return number * 2
})
console.log(evens)

// ES6
var newNumbers = numbers.filter(number => number % 2 == true).map(number => number * 2)

