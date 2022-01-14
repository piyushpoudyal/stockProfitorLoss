const initialPrice=document.querySelector("#inputA");
const stockBought=document.querySelector("#inputB");
const currentPrice=document.querySelector("#inputC");
const calculateButton=document.querySelector("#cal-btn");
const output=document.querySelector("#outputB");


let calculateProfitAndLoss=(initial,quantity,current)=>{
if(initial>current){
var loss=(initial-current)*quantity;
const lossPercentage = loss/(initial*quantity) * 100;
output.style.color="red";
showOutput(`Hey, the loss is  ${loss.toFixed(2)} and the loss percentage is  ${lossPercentage.toFixed(2)}% `);

    }else if(current>initial){
        var profit=(current - initial)*quantity;
        const profitPercentage = profit/(initial*quantity) * 100;
        showOutput(`Hey, the profit is ${profit.toFixed(2)} and the profit percentage is  ${profitPercentage.toFixed(2)}% `);
        output.style.color="green";
    }else{
showOutput("No pain no gain,no gain no pain");
    }

}
let submitHandler=()=>{
    var ip=  Number(initialPrice.value);
    var qty= Number(stockBought.value);
    var curr=Number(currentPrice.value);
    // calculateProfitAndLoss(ip,qty,curr);
    if(ip == "" || qty == "" || curr==""){
        showOutput("Input fields cannot be empty")
    } else{
        calculateProfitAndLoss(ip,qty,curr);
    }

}
let showOutput=(message,status)=>{

output.innerText=message;
}

calculateButton.addEventListener("click",submitHandler);

