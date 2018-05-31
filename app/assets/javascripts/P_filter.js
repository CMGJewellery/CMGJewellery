var is_choose = [false, false, false];

function P_format(n, currency) {
  return n.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,') + currency;
}

//this function is to format price form in VIEW PRODUCT IN ADMIN PAGE
$(document).ready(function() {
  $(".P-price-view-product-ad").html(P_format(parseInt($(".P-price-view-product-ad").html()), "đ"));
});

$(function() {
  $( "#P-slider-range" ).slider({
    range: true,
    min: 500000,
    max: 20000000,
    values: [ 5000000, 10000000 ],
    slide: function( event, ui ) {
      $( ".P-amount" ).html( P_format(ui.values[0], "đ") + ' - ' + P_format(ui.values[1], "đ"));
      is_choose[0] = true;
    }
  });
});

$(function() {
  var P_select = $(".P-mental-cate");
  var P_index;

  $(".P-mental-cate").click(function() {
    P_index = $(".P-mental-cate").index(this);
    var num;
    for (num = 0; num < P_select.length; num++) {
      $(P_select[num]).css("font-weight", "normal");
    };
    $("#P-sub-mental").html($(P_select[P_index]).html());
    $(P_select[P_index]).css("font-weight", "bold");
    is_choose[1] = true;
    $(".P-filter-cate-content").css("display", "none");
  });
})

$(function() {
  var P_select = $(".P-gemstone");
  var P_index;

  $(".P-gemstone").click(function() {
    P_index = $(".P-gemstone").index(this);
    var num;
    for (num = 0; num < P_select.length; num++) {
      $(P_select[num]).css("font-weight", "normal");
    };
    $("#P-sub-gemstone").html($(P_select[P_index]).html());
    $(P_select[P_index]).css("font-weight", "bold");
    is_choose[2] = true;
    $(".P-filter-cate-content").css("display", "none");
  });
});

$(function() {
  var P_index;
  var P_select = $(".P-filter-cate-content");
  $(".P-filter-cate").mouseover(function() {
    var num;
    for (num = 0; num < P_select.length; num++) {
      $(P_select[P_index]).css("display", "none");
    }
    P_index = $(".P-filter-cate").index(this);
    $(P_select[P_index]).css("display", "block");
  });
  
  $(".P-filter-cate-content").mouseout(function() {
    $(P_select[P_index]).css("display", "none");
    if (is_choose[P_index]) {
      $(".P-filter-clear").css("display", "inline");
    };
  });
});