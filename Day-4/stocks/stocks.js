const textBox = document.getElementById("quoteSymbol")
const showQuotes = document.getElementById("showBtn")
const display = document.getElementById("stockQuoteDisplay")

const symbol = textBox.value

showBtn.addEventListener("click", function(){
    getStockQuote()
})


/*quotes.map(function(quote){
    const result = getStockQuote(quote)
    return quote.price
    console.log(result)
    
    console.log()
}) */

function getStockQuote(stockSymbol){
    let sym = quotes.filter(function(company){
        return 
    })
}


const result = getStockQuote(symbol)
console.log(result)

console.log()
