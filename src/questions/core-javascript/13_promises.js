var numbers = [1,2,3]

// what does this code print?
var fs = require('fs')

function helper() {
    console.log('helper start')
    fs.readFile('./13_promises.js', (err, data) => {
        console.log(data.toString())
    })
    console.log('helper finish')
}

function main() {
    console.log('main')
    helper()
}

main()

