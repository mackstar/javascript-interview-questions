//Remove all the odd numbers from this array and times by 2 

// Notes
// look for chaining of functions as opposed to individually

var numbers = [1,2,3,4,5]

//non functional
var evens = []
var j = 0;
for (var i = 0; i < numbers.length; i++ ){    
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
