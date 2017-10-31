//Sum all the numbers in this array

//Notes

// Look for use of reduce. 
var numbers = [1,2,3,4,5]

var sum = 0;
//non functional
for (var i = 0; i < numbers.length; i++) {
    sum = numbers[i] + sum;
}

console.log(sum)

//functional
var sum = numbers.reduce(function(sum, value) {
    return sum + value
});

console.log(sum);

//functional ES6
var sum = numbers.reduce((sum, value) => (sum + value));
