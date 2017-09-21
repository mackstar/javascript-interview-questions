function add() {
    console.log (arguments)
}

add(5,4,3,2,1)

function betterAdd(...values) {
    console.log(values)
}

betterAdd(5,4,3,2,1)