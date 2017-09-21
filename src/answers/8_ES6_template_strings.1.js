var name = 'tom'

// 1) Print out the following vaiable using ES6 template strings. 
//traditional way
console.log('Hello my name is ' + name)

//using ES6 template strings. 
console.log(`Hello my name is ${name}`)

// 2) Print out the value returned from the following function
function getName() {
    return 'Tom'
}

console.log(`Name is ${getName()}`)