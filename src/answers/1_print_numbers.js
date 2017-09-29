//1) Print out numbers

//Notes:
// Basic Java Script. 
// Look for use of functions instead of non-functional. 
// If written in a non functional way, ask if there are any other ways of solving the problem
// not using the a loop keyword.
var numbers = [1,2,3,4]

//non functional
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//functional
numbers.forEach(function(number) {
    console.log(number);
})

//functional ES6
numbers.forEach((number) => {
    console.log(number);
})
//OR 
numbers.forEach((number) => console.log(number))
