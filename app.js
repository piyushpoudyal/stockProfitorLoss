var initialPrice=document.querySelector("#inputA");
var stockBought=document.querySelector("#inputB");
var currentPrice=document.querySelector("#inputC");
var calculateButton=document.querySelector("#cal-btn");
var output=document.querySelector("#outputB");


function calculateProfitAndLoss(initial,quantity,current){
if(initial>current){
var loss=(initial-current)*quantity;
const lossPercentage = loss/(initial*quantity) * 100;
output.style.color="red";
showOutput(`Hey, the loss is ${loss} and the loss percentage is ${lossPercentage}% `);

    }else if(current>initial){
        var profit=(current - initial)*quantity;
        const profitPercentage = profit/(initial*quantity) * 100;
        showOutput(`Hey, the profit is ${profit} and the profit percentage is ${profitPercentage}% `);
        output.style.color="green";
    }else{
showOutput("No pain no gain,no gain no pain");
    }

}
function submitHandler(){
    var ip=  Number(initialPrice.value);
    var qty= Number(stockBought.value);
    var curr=Number(currentPrice.value);
    // calculateProfitAndLoss(ip,qty,curr);
    if(initialPrice.value == "" || stockBought.value == "" || currentPrice.value ==""){
        showOutput("Input fields cannot",white)
    }else if(initialPrice<1 || stockBought<1 || currentPrice<0){
        showOutput("Value should be greater than zero",white)
    } else{
        calculateProfitAndLoss(ip,qty,curr);
    }

}
function showOutput(message,status){

output.innerText=message;
}

calculateButton.addEventListener("click",submitHandler);

