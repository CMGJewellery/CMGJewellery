// document.addEventListener("turbolinks:load", function (event) {
//   var flag;
//   $('.P-form-new-product').submit(function() {
//     flag = newProductValid();
//     return flag;
//   })
// });

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

