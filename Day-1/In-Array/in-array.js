myArr = ["apple", "shoe", "basket", "heart", "circle", "soup"]

console.log(myArr.includes("apple"))
console.log(myArr.includes("Jenifer")) 

let itemArr = ["apple", "shoe", "basket", "heart", "circle", "soup"]

function isInArray(items) {
    for (let i = 0; i <itemArr.length; i++) {
        if(itemArr[i] === items) {
           return true
        }
    }
    return false
     

} 

console.log(isInArray("circle"))
console.log(isInArray("job"))
console.log(isInArray("soup")) 


