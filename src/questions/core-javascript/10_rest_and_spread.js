// 1) Each person in the array 

function talk(greeting, goodbye, names) {
    names.forEach(function(name) {
       console.log(`${greeting} ${name}`)
       console.log(`${goodbye} ${name}`)  
    });
}

talk('hello', 'goodbye', ['Tom', 'Kimberley'])

function talk2(greeting, goodbye, ...names) {
    names.forEach(function(name) {
       console.log(`${greeting} ${name}`)
       console.log(`${goodbye} ${name}`)  
    });
}

talk2('hello', 'goodbye', 'Tom', 'Kimberley')

var arr = ['hello', 'goodbye']

talk2(arr, 'Tom', 'Kimberley')