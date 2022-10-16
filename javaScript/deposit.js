// to get input fiel value,or ja input a dea hoi ota peete nicher tinta steps follow korte hoi 

// step-1. set addEventListener to the targeted button or any element *******
document.getElementById('deposit-btn').addEventListener('click', function(){

    // step-2. get the input element then using .value to get inputed value *********
    const depositField = document.getElementById('deposit-box');
    const depositAmount = depositField.value;
    // here depositAmount type is stirng so need to convert in integer or float
    const amountInInt = parseFloat(depositAmount);
 // step-9: clear the depositField **************
 depositField.value = '';

    // check that deposited value is a number or not,if NaN using isNaN() function, then return if value is not a number 
    if(isNaN(amountInInt)){
        alert('Please enter a number ');
        return;
       }
    // console.log(typeof amountInInt);
    // console.log(depositAmount);

    // step-3. get element,jeiter upor kaj chalabo.********* 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalAmount = depositTotalElement.innerText;
     // here depositTotalAmount type is stirng so need to convert in integer or float
    var amountInDecimal = parseFloat(depositTotalAmount);
    // console.log(typeof amountInDecimal);

    // step-4 calculate current inputed deposited and previous deposit amount ******
    amountInDecimal = amountInDecimal + amountInInt;

    // step-5: set the total amount to the previous deposit element as a this.innerText ********
    depositTotalElement.innerText = amountInDecimal;



// step-6: now add deposited amount to the balance ********
 const balanceTotalElement = document.getElementById('balance-total');
 const balanceTotalAmount = balanceTotalElement.innerText;
//step-7:  convet string to number 
var balanceInDecimal = parseFloat(balanceTotalAmount);
balanceInDecimal = balanceInDecimal + amountInInt;

//step-8:  set the inner text to the balance total element 
balanceTotalElement.innerText = balanceInDecimal;

})