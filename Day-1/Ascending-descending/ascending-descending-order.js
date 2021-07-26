let numbers = [3, 4, 56, 7, 8, 1]

function descendingOrder() {
    for (let i = 0; i < numbers.length; i ++) {
        for (let j= 0; j < numbers.length -1; j ++){
            if (numbers[j] < numbers[j + 1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j +1] = temp
            }
                       
        }
    }
    
    console.log(numbers) 
}


function ascendingOrder() {
    for (let i = 0; i < numbers.length; i ++) {
        for (let j= 0; j < numbers.length -1; j ++){
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j +1] = temp
            }
                       
        }
    }
    
    console.log(numbers) 
}



descendingOrder()
ascendingOrder()