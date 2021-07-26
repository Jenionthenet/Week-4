
let revWord = ""

function isPalindrome(word) {
    
for (let index = word.length-1; index > -1; index --) {
  revWord += word[index]
}
if (word == revWord) {
    return true
} else {
    return false
    } 
}

let answer = isPalindrome("mom")
console.log(answer)
console.log(revWord)
