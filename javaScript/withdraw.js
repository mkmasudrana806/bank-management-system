document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step-1:get the withdraw amount which user input 
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawAmount = withdrawInputField.value ;
    const withdrawAmountInDecimal = parseFloat(withdrawAmount);
    withdrawInputField.value = '';

    if(isNaN(withdrawAmountInDecimal)){
     alert('Please enter a number ');
     return;
    }
// step-2: withdraw amount ja dibe. somoporiman amount balace theke bad dibo
// subtruct the withdraw amount fom the balace 
const balanceTotalElement = document.getElementById('balance-total');
 const balanceTotalAmount = balanceTotalElement.innerText;

//step-3:  convet string to number 
var balanceInDecimal = parseFloat(balanceTotalAmount);

// check withdrawal balance,total balance theke beshi kina, behsi hoile return kore dibo . 
if(withdrawAmountInDecimal>balanceTotalAmount){
    alert('baper account a oto tk nai');
    withdrawInputField.value = '';
   return;
}
balanceInDecimal = balanceInDecimal - withdrawAmountInDecimal;

//step-4:  set the inner text to the balance total element 
balanceTotalElement.innerText = balanceInDecimal;



// here we add withdraw amount to the withdraw section 
// 1.first get the withdrawTotal element by id then get the innerText then convert it in number 
const withdrawTotalElement = document.getElementById('withdraw-total');
const withdrawTotalAmount = parseFloat(withdrawTotalElement.innerText);
// addition withdraw amount and previous withdraw amount 
const withdrawTotal = withdrawTotalAmount + withdrawAmountInDecimal;
withdrawTotalElement.innerText = withdrawTotal;

// step-5: clear the withdraw input field 
withdrawInputField.value = '';
})