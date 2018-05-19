document.addEventListener("turbolinks:load", function (event) {
  var flag = true;
  var result = new Array();//to store each return boolean
  //declare quick reference
  var name = document.getElementById("product_name");
  var price = document.getElementById("product_price");
  var description = document.getElementById("product_description");
  var advantage = document.getElementsByClassName("P-advantage-new-product");
  var collection = document.getElementById("product_collection");
  var img = $('#product_img_field_container').children('.M-img-field');
  var quanlity = document.getElementById("product_amount");
  var category = document.getElementsByClassName("P-category-new-product");
  var metal = document.getElementById("product_metal");
  var gemstone = document.getElementById("product_gem_stone");

  $('.P-form-new-product').submit(function() {
    flag = true;
    result[0] = validLengthP(name, 50, "#P-alert-name", 0);
    result[1] = validNumP(price, "#P-alert-price", 1, 20000000, 500000);
    result[2] = validCheckP(category, "#P-alert-category", 2); 
    result[3] = validLengthP(description, 500, "#P-alert-des", 3); 
    result[4] = validLengthP(advantage[0], 300, "#P-alert-advan1", 4); 
    result[5] = validLengthP(advantage[1], 300, "#P-alert-advan2", 5); 
    result[6] = validLengthP(advantage[2], 300, "#P-alert-advan3", 6); 
    result[7] = validLengthP(collection, 30, "#P-alert-collect", 7);
    result[8] = validNumP(quanlity, "#P-alert-quanlity", 8, 1000, 5);
    result[9] = validChooseP(metal, "#P-alert-metal", 9);
    result[10] = validChooseP(gemstone, "#P-alert-gemstone", 10);
    result[11] = isEmptyUploadP(img, "#P-alert-img", 11);

    var i;
    for (i = 0 ; i <= 11 ; i++) {
      if (result[i] == false) flag = false;
    } 

    return flag;
  });
});

function notEmptyFieldP(field, idAlert, indexAlert) {
  var flag;
  var elementAlert = $(".P-alert");

  if (field.value.length != 0) {
    flag = true;
    $(elementAlert[indexAlert]).css("opacity", "0");
  } else {
    flag = false;
    $(elementAlert[indexAlert]).css("opacity", "1");
    $(idAlert).text("This field is required!");
  };

  return flag;
};

function isEmptyUploadP(field, idAlert, indexAlert) {
  var flag;
  var elementAlert = $(".P-alert");
  
  if ($('#product_img_field_container').children('.M-img-field').length == 1) {
    flag = false
    $(elementAlert[indexAlert]).css("opacity", "1");
    $(idAlert).text("This field is required!");
  } else {
    flag = true;
    $(elementAlert[indexAlert]).css("opacity", "0");
  }
  return flag;
}

function validLengthP(field, max, idAlert, indexAlert) {
  var flag;
  var elementAlert = $(".P-alert");
  var alphaExp = /^[a-zA-Z0-9_. ',-]*$/;

  //check whether field is empty
  if (notEmptyFieldP(field, idAlert, indexAlert)) {
    //check length of input
    if (field.value.length <= max) {
      //check match regex
      if (field.value.match(alphaExp)) {
        flag = true;
        $(elementAlert[indexAlert]).css("opacity", "0");
      } else {
        flag = false;
        $(elementAlert[indexAlert]).css("opacity", "1");
        $(idAlert).text("Must not contains special characters");
      };
    } else {
      flag = false;
      $(elementAlert[indexAlert]).css("opacity", "1");
      $(idAlert).text("Cointains less than " +max+ " characters");
    };
  } else {
    flag = false;
  }

  return flag;
}

function validNumP(field, idAlert, indexAlert, max, min) {
  var flag;
  var elementAlert = $(".P-alert");
  var regex = /^[0-9]*$/;

  if (notEmptyFieldP(field, idAlert, indexAlert)) {
    if (!(field.value.match(regex))) {
      $(elementAlert[indexAlert]).css("opacity", "1");
      $(idAlert).text("Must contain only number");
    } else {
      if (field.value < min || field.value > max) {
        flag = false;
        $(elementAlert[indexAlert]).css("opacity", "1");
        $(idAlert).text("Must between " +min+ " and " +max);
      } else {
        flag = true;
        $(elementAlert[indexAlert]).css("opacity", "0");
      };
    };
  } else {
    flag = false;
  };

  return flag;
};

function validCheckP(field, idAlert, indexAlert) {
  var i;
  var flag = false;
  var elementAlert = $(".P-alert");
  for (i = 0 ; i < field.length ; i++) {
    if (field[i].checked) {
      flag = true;
      $(elementAlert[indexAlert]).css("opacity", "0");
    }
  }
  if (!flag) {
    $(elementAlert[indexAlert]).css("opacity", "1");
    $(idAlert).text("This field is required!");
  }
  return flag;
}

function validChooseP(field, idAlert, indexAlert) {
  var flag;
  var elementAlert = $(".P-alert");

  if (field.value != "") {
    flag = true;
    $(elementAlert[indexAlert]).css("opacity", "0");
  } else {
    flag = false;
    $(elementAlert[indexAlert]).css("opacity", "1");
    $(idAlert).text("This field is required!");
  }
  return flag;
}