// step-1: add click handler connet to the button id 
document.getElementById('submit-btn').addEventListener('click', function( ){
 // step-2: get the email field 
 const emailField = document.getElementById('user-email');
 const emailAddress = emailField.value;
 // console.log(emailAddress);
 // step-3: get password
 const passwordField = document.getElementById('user-password');
 const password = passwordField.value;
 // console.log(password);
 if(emailAddress=='masud' && password=='soton'){
     // console.log('user is valid');
     window.location.href = 'bank.html';
 }
 else
 {
    alert('Mair khaoar age password mone kor');
 }
})
