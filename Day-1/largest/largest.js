let numbers = [445, 2, 3, 33, 5, 234, 23]

function findLargest() {
    for (let i = 0; i < numbers.length; i ++) {
        for (let j= 0; j < numbers.length -1; j ++){
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j +1] = temp
            }
            
           
        }
    }
    let largest = numbers[numbers.length -1]
    console.log(largest) 
}

findLargest()