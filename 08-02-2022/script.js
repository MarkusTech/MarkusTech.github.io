const money = document.querySelector('#money');
const months = document.querySelector("#months")
const interesting = document.querySelector('#interest')

const initialAmount = document.querySelector("#initialAmount");
const withInterest = document.querySelector('#withInterest')
const interestHeight = document.querySelector('#interestHeight')

const calculate = () => {
    const initialDeposit = parseFloat(money.value);
    if(!initialDeposit){
        return;
    }


    const interestValue = parseFloat(interesting.value) * 0.01;
    if(!interestValue){
        return;
    }
    const monthsValue = parseFloat(months.value) / 12 ;
    if(!monthsValue){
        return;
    }

    const result = (initialDeposit + (initialDeposit * interestValue * monthsValue));
    const height = ((result / initialDeposit) * 100) + "px";

    initialAmount.innerText = initialDeposit.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2, style:"currency",currency:"PHP"});
    withInterest.innerText = result.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits:  2, style:"currency",currency:"PHP"});

    
    interestHeight.style.height = height;

    console.log(result);
}

calculate();

money.addEventListener('input', calculate);
interest.addEventListener("input",calculate);
months.addEventListener("change", calculate);