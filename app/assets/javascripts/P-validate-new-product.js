document.addEventListener("turbolinks:load", function (event) {
  var flag = true;
  var result = new Array();//to store each return boolean
  //declare quick reference
  var name = document.getElementById("P-name-new-product");
  var price = document.getElementById("P-price-new-product");
  var description = document.getElementById("P-description-new-product");
  var advantage = document.getElementsByClassName("P-advantage-new-product");
  var collection = document.getElementById("P-collection-new-product");
  var img = document.getElementsByClassName("P-upload-img-field");

  $("#P-name-new-product").focusout(function() {
    result[0] = validNameP(name, 50, "#P-alert-name", 0);
  });

  $("#P-price-new-product").focusout(function() {
    result[1] = validPriceP(price, "#P-alert-price", 1, 20000000, 500000);
  });

  $("#P-description-new-product").focusout(function() {
    result[2] = validLengthP(description, "#P-alert-des", 2, 500);
  });

  var inputAdvanElement = $(".P-advantage-new-product");
  $(inputAdvanElement[0]).focusout(function() {
    result[3] = validLengthP(advantage[0], "#P-alert-advan1", 3, 300);
  });

  $(inputAdvanElement[1]).focusout(function() {
    result[4] = validLengthP(advantage[0], "#P-alert-advan2", 4, 300);
  });

  $(inputAdvanElement[2]).focusout(function() {
    result[5] = validLengthP(advantage[0], "#P-alert-advan3", 5, 300);
  });

  $("#P-collection-new-product").focusout(function() {
    result[6] = validNameP(collection, 30, "#P-alert-collect", 6);
  });

  $('.P-form-new-product').submit(function() {

    result[0] = notEmptyFieldP(name, "#P-alert-name", 0); 
    result[1] = notEmptyFieldP(price, "#P-alert-price", 1); 
    result[2] = notEmptyFieldP(description, "#P-alert-des", 2); 
    result[3] = notEmptyFieldP(advantage[0], "#P-alert-advan1", 3); 
    result[4] = notEmptyFieldP(advantage[1], "#P-alert-advan2", 4); 
    result[5] = notEmptyFieldP(advantage[2], "#P-alert-advan3", 5); 
    result[6] = notEmptyFieldP(collection, "#P-alert-collect", 6);
    result[7] = notEmptyUploadP(img[0]);
    result[8] = notEmptyUploadP(img[1]);
    result[9] = notEmptyUploadP(img[2]);
    result[10] = notEmptyUploadP(img[3]);

    var i;
    for (i = 0 ; i <= 10 ; i++) {
      if (result[i] == false) flag = false;
    } 
    return flag;
  })
});

// function newProductValid() {
//   var name = document.getElementById("P-name-new-product");
//   // var type = document.getElementById("P-type-new-product");
//   var price = document.getElementById("P-price-new-product");
//   var description = document.getElementById("P-description-new-product");
//   var advantage = document.getElementsByClassName("P-advantage-new-product");
//   var collection = document.getElementById("P-collection-new-product");
//   // var mental = document.getElementById("P-mental-new-product");
//   // var gemstone = document.getElementById("P-gemstone-new-product");
//   var img = document.getElementsByClassName("P-upload-img-field");

//   if (isEmptyP(name) || isEmptyP(price) || isEmptyP(description) || 
//   isEmptyP(advantage[0]) || isEmptyP(advantage[1]) || isEmptyP(advantage[2]) || isEmptyP(collection) || 
//   isEmptyImgP(img[0]) || isEmptyImgP(img[1]) || isEmptyImgP(img[2]) || isEmptyImgP(img[3])) {
//     return false;
//   }

//   if (validNameP(name, 50, "* Name of products cointains maximum 50 characters", "* Name of products cointains only letters and numbers")) {
//     if(validPriceP(price)) {
//       if (validLengthP(description, 500, "* Description contains maximum 500 characters")) {
//         if (validLengthP(advantage[0], 200, "* Advantage contains maximum 200 characters")) {
//           if (validLengthP(advantage[1], 200, "* Advantage contains maximum 200 characters")) {
//             if (validLengthP(advantage[2], 200, "* Advantage contains maximum 200 characters")) {
//               if (validNameP(collection, 30, "* Collection contains maximum 30 characters", "* Collection contains only letters and numbers")) {
//                 return true;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   return false;
// }

// function isEmptyP(field) {
//   if (field.value.length == 0) {
//     document.getElementById('P-alert').innerText = "* All fields are mandatory *" ;
//     field.focus();
//     return true;
//   };

//   return false;
// }

// function isEmptyImgP(field) {
//   if (field.value.length == 0) {
//     document.getElementById('P-alert').innerText = "* All fields are mandatory *" ;
//     var index = $(field).index(field);
//     var element = $(".P-choose-img-label");
//     $(element[index]).css("background", "red");
//     return true;
//   };

//   return false;
// }

// function validNameP(name, max, alertMsgLong, alertMsg) {
//   var alphaExp = /^([A-Z]{1})+([[A-Za-z0-9-]+[,.]?[ ]?|[A-Za-z0-9-]+[-]]?)+$/;

//   if (name.value.match(alphaExp)) {
//     if (name.value.length > max) {
//       document.getElementById("P-alert").innerText = alertMsgLong;
//       name.focus();
//       return false;
//     }
//     return true;
//   } else {
//     document.getElementById("P-alert").innerText = alertMsg;
//     name.focus();
//     return false;
//   }
// }

// function validPriceP(price) {
//   var alphaExp = /^[0-9]*$/;

//   if (price.value.match(alphaExp)) {
//     if ((price.value < 500000) || (price.value > 20000000)) {
//       document.getElementById("P-alert").innerText = "* Price must be between 500,00đ and 20,000,000đ *";
//       price.focus();
//       return false;
//     }
//     return true;
//   } else {
//     document.getElementById("P-alert").innerText = "* Price contains only numbers *";
//     price.focus();
//     return false;
//   };
// }

// function validLengthP(field, max, alertMsg) {
//   if (field.value.length > max) {
//     document.getElementById("P-alert").innerText = alertMsg;
//     field.focus();
//     return false;
//   };
//   return true;
// }

// $(document).ready(function() {
//   $("#P-name-new-product").focusout(function(){
//     var name = document.getElementById("P-name-new-product");
//     validNameP(name, 50, "* Name of products cointains maximum 50 characters", "* Name of products cointains only letters and numbers");
//   });
// });

function notEmptyFieldP(field, idAlert, indexAlert) {
  var flag;
  var elementAlert = $(".P-alert");

  if (field.value.length != 0) {
    flag = true;
    $(elementAlert[indexAlert]).css("display", "none");
  } else {
    flag = false;
    $(elementAlert[indexAlert]).css("display", "block");
    $(idAlert).text("This field is required!");
  };

  return flag;
};

function notEmptyUploadP(field) {
  var flag;
  var index = $(".P-upload-img-field").index(field);
  var element = $(".P-choose-img-label");
  if (field.value.length == 0) {
    flag = false
    $(element[index]).css("background", "red");
    setTimeout(function() {
      $(element[index]).css("background", "#e6e6e6");
    }, 1500);
  } else flag = true;
  return flag;
}

function validNameP(field, max, idAlert, indexAlert) {
  var flag;
  var elementAlert = $(".P-alert");
  var alphaExp = /^([A-Z]{1})+([[A-Za-z0-9-]+[,.]?[ ]?|[A-Za-z0-9-]+[-]]?)+$/;

  //check whether field is empty
  if (notEmptyFieldP(field, idAlert, indexAlert)) {
    //check length of input
    if (field.value.length <= max) {
      //check match regex
      if (field.value.match(alphaExp)) {
        flag = true;
        $(elementAlert[indexAlert]).css("display", "none");
      } else {
        flag = false;
        $(elementAlert[indexAlert]).css("display", "block");
        $(idAlert).text("Please enter valid name!");
      };
    } else {
      flag = false;
      $(elementAlert[indexAlert]).css("display", "block");
      $(idAlert).text("Cointains less than " +max+ " characters");
    };
  } else {
    flag = false;
  }
  
  return flag;
}

function validPriceP(field, idAlert, indexAlert, max, min) {
  var flag;
  var elementAlert = $(".P-alert");
  
  if (notEmptyFieldP(field, idAlert, indexAlert)) {
    if (field.value < min || field.value > max) {
      flag = false;
      $(elementAlert[indexAlert]).css("display", "block");
      $(idAlert).text("Price must between " +min+ " and " +max);
    } else {
      flag = true;
      $(elementAlert[indexAlert]).css("display", "none");
    }
  } else {
    flag = false;
  };

  return flag;
};

function validLengthP(field, idAlert, indexAlert, maxLength) {
  var flag;
  var elementAlert = $(".P-alert");

  if (notEmptyFieldP(field, idAlert, indexAlert)) {
    if (field.value.length > maxLength) {
      flag = false;
      $(elementAlert[indexAlert]).css("display", "block");
      $(idAlert).text("Contains less than " +maxLength+ "characters");
    } else {
      flag = true;
      $(elementAlert[indexAlert]).css("display", "none");
    };
  } else {
    flag = false;
  };

  return flag;
}