//https://www.formget.com/form-validation-using-javascript/
document.addEventListener("turbolinks:load", function(event) {
  var flag;
  $(".B-validator").submit(function() {
    flag = formValidation();
    return flag;
  });
});
function formValidation() {
  // Make quick references to our fields.
  var fullname = document.getElementById("user_name");
  var email = document.getElementById("user_email");
  var password = document.getElementById("user_password");
  var passwordConfirmation = document.getElementById(
    "user_password_confirmation"
  );
  var fullnameMessenger = document.getElementById("user_name_messenger");
  var emailMessenger = document.getElementById("user_email_messenger");
  var passwordMessenger = document.getElementById("user_password_messenger");
  var passwordConfirmationMessenger = document.getElementById(
    "user_password_confirmation_messenger"
  );
  // To check empty form fields.
  if (isEmpty(fullname, fullnameMessenger) || isEmpty(email, emailMessenger)) {
    return false;
  }
  // Check each input in the order that it appears in the form.
  if (
    validateName(fullname, fullnameMessenger, "* Please enter a valid name")
  ) {
    if (
      validateEmail(
        email,
        emailMessenger,
        "* Please enter a valid email address"
      )
    ) {
      if (
        lengthDefinePassword(
          password,
          passwordConfirmation,
          passwordMessenger,
          6,
          1000
        )
      ) {
        if (
          comparePassword(
            password,
            passwordConfirmation,
            passwordConfirmationMessenger,
            "* Your password confirmation have to be identical"
          )
        ) {
          return true;
        }
      }
    }
  }
  return false;
}
function isEmpty(field, fieldMessenger) {
  if (field == null) {
    return false;
  }
  if (field.value.length == 0) {
    fieldMessenger.innerText = "* This field is mandatory *"; // This segment displays the validation rule for all fields
    fieldMessenger.style.visibility = "visible";
    field.focus();
    return true;
  }
  fieldMessenger.innerText = "*";
  fieldMessenger.style.visibility = "hidden";
  return false;
}
function comparePassword(
  inputPass,
  inputPasswordConfirmation,
  fieldMessenger,
  alertMsg
) {
  if (inputPass == null) return true;
  if (inputPasswordConfirmation == null) return true;
  if (inputPass.value === inputPasswordConfirmation.value) {
    fieldMessenger.innerText = "*";
    fieldMessenger.style.visibility = "hidden";
    return true;
  }
  fieldMessenger.innerText = alertMsg; // This segment displays the validation rule for name.
  fieldMessenger.style.visibility = "visible";
  inputPasswordConfirmation.focus();
  return false;
}
// Function that checks whether input text is an alphabetic character or not.
function validateName(inputtext, fieldMessenger, alertMsg) {
  if (inputtext == null) return true;
  var alphaExp = /^([A-Z]{1})+([[A-Za-z]+[,.]?[ ]?|[A-Za-z]+[-]]?)+$/gm;
  if (inputtext.value.match(alphaExp)) {
    fieldMessenger.innerText = "*";
    fieldMessenger.style.visibility = "hidden";
    return true;
  } else {
    fieldMessenger.innerText = alertMsg; // This segment displays the validation rule for name.
    fieldMessenger.style.visibility = "visible";
    inputtext.focus();
    return false;
  }
}
// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefinePassword(
  inputPass,
  inputPasswordConfirmation,
  fieldMessenger,
  min,
  max
) {
  // Getting a form that doesn't have password field
  if (inputPass == null) return true;

  // Getting a login form
  var uInput = inputPass.value;
  if (inputPasswordConfirmation == null) {
    if (uInput.length <= 0) {
      fieldMessenger.innerText = "* All fields are mandatory *";
      fieldMessenger.style.visibility = "visible";
      inputPass.focus();
      return false;
    } else {
      fieldMessenger.innerText = "*";
      fieldMessenger.style.visibility = "hidden";
      return true; // Pass to backend
    }
  }

  // Getting a sign up form
  if (uInput.length >= min && uInput.length <= max) {
    fieldMessenger.style.visibility = "hidden";
    fieldMessenger.innerText = "*";
    return true;
  } else {
    fieldMessenger.innerText =
      "* Please enter more than or equal to " + min + " characters *"; // This segment displays the validation rule for password
    fieldMessenger.style.visibility = "visible";
    inputPass.focus();
    return false;
  }
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function validateEmail(email, fieldMessenger, alertMsg) {
  if (email == null) return true;
  var emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailExp.test(email.value)) {
    fieldMessenger.innerText = "*";
    fieldMessenger.style.visibility = "hidden";
    return true;
  } else {
    fieldMessenger.innerText = alertMsg; // This segment displays the validation rule for email.
    fieldMessenger.style.visibility = "visible";
    email.focus();
    return false;
  }
}

//-------------------------
function checkEmailExisted() {
  var checkMail = true;
  var email = $("#user_email").val();
  var msg = $("#user_email_messenger").html("");
  $.ajax({
    url: "/check_email",
    method: "get",
    data: { txt_email: email },
    success: function(data) {
      if (data.check) {
        //console.log(data.check);
        msg.html("* This email is already taken");
        $("#user_email_messenger").css("visibility", "visible");
        $("#user_email").focus();
        checkMail = false;
      } else {
        msg.html("");
      }
    }
  });
  return checkMail;
}
