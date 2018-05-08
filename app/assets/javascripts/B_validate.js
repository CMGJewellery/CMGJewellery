//https://www.formget.com/form-validation-using-javascript/
document.addEventListener("turbolinks:load", function (event) {
  var flag;
  $('.B-validator').submit(function () {
    flag = formValidation();
    return flag;
  })
});
function formValidation() {
  // Make quick references to our fields.
  var fullname = document.getElementById('user_name');
  var email = document.getElementById('user_email');
  var password = document.getElementById('user_password');
  var passwordConfirmation = document.getElementById('user_password_confirmation');
  // To check empty form fields.
  if ((isEmpty(fullname)) || isEmpty(email)) {
    return false;
  }
  // Check each input in the order that it appears in the form.
  if (validateName(fullname, "* Please enter a valid name")) {
    if (emailValidation(email, "* Please enter a valid email address")) {
      if (lengthDefinePassword(password, passwordConfirmation, 6, 1000)) {
        if(comparePassword(password, passwordConfirmation, "* Your password confirmation have to be identical")){
          document.getElementById('B_messenger').innerText ="";
          return true;
        }
      }
    }
  }
  return false;
}
function isEmpty(field)
{
  if(field == null) {
    return false;
  }
  if (field.value.length == 0) {
    document.getElementById('B_messenger').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
    field.focus();
    return true;
  }
  return false;
}
function comparePassword(inputPass, inputPasswordConfirmation, alertMsg)
{
  if(inputPass == null) return true;
  if(inputPasswordConfirmation == null) return true;
  if(inputPass.value === inputPasswordConfirmation.value) 
  {
    return true;
  }
  document.getElementById('B_messenger').innerText = alertMsg; // This segment displays the validation rule for name.
  inputPasswordConfirmation.focus();
  return false;
}
// Function that checks whether input text is an alphabetic character or not.
function validateName(inputtext, alertMsg) {
  if(inputtext == null) return true;
  var alphaExp = /^([A-Z]{1})+([[A-Za-z]+[,.]?[ ]?|[A-Za-z]+[-]]?)+$/gm;
  if (inputtext.value.match(alphaExp)) {
    return true;
  } else {
    document.getElementById('B_messenger').innerText = alertMsg; // This segment displays the validation rule for name.
    inputtext.focus();
    return false;
  }
}
// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefinePassword(inputPass, inputPasswordConfirmation, min, max) {
  
  // Getting a form that doesn't have password field
  if(inputPass == null) return true; 

  // Getting a login form
  var uInput = inputPass.value;
  if(inputPasswordConfirmation == null) {
    if (uInput.length <= 0){
      document.getElementById('B_messenger').innerText = "* All fields are mandatory *";
      inputPass.focus();
      return false;
    }
    else {
      return true;  // Pass to backend
    }
  }

  // Getting a sign up form
  if (uInput.length >= min && uInput.length <= max) {
    return true;
  } else {
    document.getElementById('B_messenger').innerText = "* Please enter more than or equal to " + min + " characters *"; // This segment displays the validation rule for password
    inputPass.focus();
    return false;
  }
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(email, alertMsg) {
  if(email == null) return true;
  var emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailExp.test(email.value)) {
    return true;
  } else {
    document.getElementById('B_messenger').innerText = alertMsg; // This segment displays the validation rule for email.
    email.focus();
    return false;
  }
}