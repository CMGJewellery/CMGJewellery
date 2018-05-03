//https://www.formget.com/form-validation-using-javascript/
document.addEventListener("turbolinks:load", function (event) {
  var flag;
  $('#B-sign-up-form').submit(function () {
    flag = formValidation();
    // console.log(flag);
    return flag;
  })
  // console.log(flag);
});
function formValidation() {
  // Make quick references to our fields.
  var fullname = document.getElementById('user_name');
  var email = document.getElementById('user_email');
  var password = document.getElementById('user_password');
  var passwordConfirmation = document.getElementById('user_password_confirmation');
  // To check empty form fields.
  if (isEmpty(fullname) || isEmpty(email)) {
    return false;
  }
  // Check each input in the order that it appears in the form.
  if (inputAlphabet(fullname, "* For your name please use alphabets only")) {
    if (emailValidation(email, "* Please enter a valid email address")) {
      if (lengthDefine(password, 6, 1000)) {
        if(comparePassword(password, passwordConfirmation, "* Your password confirmation have to be identical")){
          document.getElementById('B_messenger').innerText ="";
          console.log("Main");
          return true;
        }
      }
    }
  }
  return false;
}
function isEmpty(field)
{
  if (field.value.length == 0) {
    document.getElementById('B_messenger').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
    console.log("Empty");
    field.focus();
    return true;
  }
  return false;
}
function comparePassword(inputPass, inputPasswordConfirmation, alertMsg)
{
  if(inputPass.value === inputPasswordConfirmation.value) 
  {
    console.log("Same Password");
    return true;
  }
  document.getElementById('B_messenger').innerText = alertMsg; // This segment displays the validation rule for name.
  console.log("Different Password");
  inputPasswordConfirmation.focus();
  return false;
}
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
  var alphaExp = /^[a-zA-Z]+$/;
  if (inputtext.value.match(alphaExp)) {
    return true;
  } else {
    document.getElementById('B_messenger').innerText = alertMsg; // This segment displays the validation rule for name.
    console.log("Alphabet");
    inputtext.focus();
    return false;
  }
}
// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefine(inputtext, min, max) {
  var uInput = inputtext.value;
  if (uInput.length >= min && uInput.length <= max) {
    return true;
  } else {
    document.getElementById('B_messenger').innerText = "* Please enter more than " + min + " characters *"; // This segment displays the validation rule for password
    console.log("lengthDefine");
    inputtext.focus();
    return false;
  }
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(email, alertMsg) {
  var emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailExp.test(email.value)) {
    console.log("emailValidation");
    return true;
  } else {
    document.getElementById('B_messenger').innerText = alertMsg; // This segment displays the validation rule for email.
    console.log("emailValidation");
    email.focus();
    return false;
  }
}