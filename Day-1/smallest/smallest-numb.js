let numbers = [555, 22, 3, 19, 242, 1, 12, 55]

function findSmallest() {
    for (let i = 0; i < numbers.length; i ++) {
        for (let j= 0; j < numbers.length -1; j ++){
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j +1] = temp
            }
            
           
        }
    }
    let smallest = numbers[0]
    console.log(smallest) 
}

findSmallest()