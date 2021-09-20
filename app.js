var initialPrice = document.querySelector("#intial-price");
var stocks = document.querySelector("#number-of-stocks");
var currentPrice = document.querySelector("#current-price");
var calculateBtn = document.querySelector("#calculate-btn");
var output = document.querySelector("#output-box");



function calculator(initialPrice, stocks, currentPrice)
{
    var totalInitialPrice = initialPrice.value * Number(stocks.value);
    var totalCurrentPrice = currentPrice.value * Number(stocks.value);

    if(totalCurrentPrice > totalInitialPrice)
    {
        var profit = totalCurrentPrice - totalInitialPrice;
        var profitPercent = (profit / totalInitialPrice) * 100;

        showOutputMessage(`Your Profit is ${profit} and Profit Percentage ${profitPercent}%`);
    }
    else if(totalCurrentPrice < totalInitialPrice)
    {
        var loss = totalInitialPrice - totalCurrentPrice ;
        var lossPercent = (loss/ totalInitialPrice) * 100;
        showOutputMessage(`Your Loss is ${loss} and Loss Percentage ${lossPercent}%`);
    }
    else
    {
        showOutputMessage("NO GAIN OR LOSS");
    }
}


calculateBtn.addEventListener("click", function() {

    if(initialPrice.value && currentPrice.value && stocks.value)
    {
        if(initialPrice.value > 0 && currentPrice.value > 0 && stocks.value > 0){
            calculator(initialPrice, stocks, currentPrice);
        }
        else if(initialPrice.value < 0 || currentPrice.value < 0 || stocks.value < 0)
        {
            errorHandler("Please input only positive values!");
        }
        else if(initialPrice.value == 0 || currentPrice.value == 0 || stocks.value == 0)
        {
            errorHandler("Input value cannot be zero!");
        }
        else {
            errorHandler("Input cannot be a alphabet, Please input a positive number")
        }
    }
});


function errorHandler(error)
{
    output.innerText = error;
}

function showOutputMessage(message){
    output.innerText = message;
}