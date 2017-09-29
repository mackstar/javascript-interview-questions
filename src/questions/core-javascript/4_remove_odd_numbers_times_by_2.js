//Remove all the odd numbers from this array and times by 2 

var numbers = [1,2,3,4,5]

var newNumbers = numbers.filter(number => number % 2 == true).map(number => number * 2)

console.log(newNumbers)