//2) Multiple numbers * 2

//Notes
// Basic Java Script. 
// Look for use of functions instead of non-functional. 
// If written using forEach ask them not to mutate the array and look for use of map.

var numbers = [1,2,3,4]

//non functional
var newNumbers = []
for (var i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] * 2
}

console.log(newNumbers);

//functional - mutated array
numbers.forEach(function(number, i) {
    numbers[i] = numbers[i] * 2
})

console.log(numbers)

//functional - new array
numbers = [1,2,3,4]
var newNumbers2 = numbers.map(function( number) {
    return number * 2
})

console.log(newNumbers2)
