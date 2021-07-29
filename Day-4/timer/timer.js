const countTime = document.getElementById("timerText")
const time = timerText.value

let counter = time



const intervalId = window.setInterval(function() {
    counter--
    if(counter == 0)
    window.clearInterval(intervalId)
    console.log(counter)
}, 1000)

console.log(`Interval Id: ${intervalId}`)