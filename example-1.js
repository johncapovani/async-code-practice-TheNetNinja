console.log(1)
console.log(2)

setTimeout(() => {
    console.log('Callback function fired')
}, 2000)

console.log(4)
console.log(5)

//The above is a example of async code
//When this runs the callback will fire 2 seconds after the code is ran