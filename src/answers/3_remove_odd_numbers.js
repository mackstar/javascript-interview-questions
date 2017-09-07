//Remove all the odd numbers from this array

// Notes
// Look for use of filter. 

var numbers = [1,2,3,4,5]

//non functional
var evens = []

var j = 0;
for (var i = 0; i < numbers.length; i++ ){    
    if (numbers[i] % 2 == 0) {
         evens[j] = numbers[i]
         j++
    }
}
console.log(evens)

// functional
var evens = numbers.filter(function(number) {
    return number % 2 == 0
})

console.log(evens)
