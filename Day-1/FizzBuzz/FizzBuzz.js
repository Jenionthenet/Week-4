let numbers = []
let x = 1
function fizzBuzz() {
while (x < 100) {
    if (x % 5 == 0 && x % 3 == 0 ) {
        numbers.push("FizzBuzz")
    } else if (x % 5 == 0 ){
        
        numbers.push("Buzz")
    } else if (x % 3 == 0) {
        numbers.push("Fizz")
    } else {
        numbers.push(x)
    }
x ++
}
    console.log(numbers)

}

fizzBuzz()