//pattern matching on function name only. Doesn't matter about arguments.
add(1) 

// 1) Complete this function so that if y is not passed in then it will default to 5

//Couple of different solutions. 
// If this one then...what is wrong with this? A: edge cases 0 == undfined
function add(x, y) {
    if (y == undefined) {
        y = 5
    }    
    return x + y;
}

console.log(add(1))
console.log(add (2, 0))

// Answer using ES6 default arguments 
function add(x, y = 5) { 
    return x + y;
}