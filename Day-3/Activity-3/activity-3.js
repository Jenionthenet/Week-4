numbers = [1, 2, 3, 4]
let doubleNumbers = []

let result = numbers.map(function(no) {
    return no * 2
})

doubleNumbers.push(result)

console.log(doubleNumbers)



secondArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNumbers = []

let result2 = secondArr.filter(function(no) {
    return no % 2 === 0
})

evenNumbers.push(result2)

console.log(evenNumbers)



let users = [
    {name: "Jay", age: 34}, 
    {name: "John", age: 20}, 
    {name: "Mary", age: 45}
  ]

let result3 = users.find(function(user) {
    return user.name == "Jay"
})

console.log(result3)

