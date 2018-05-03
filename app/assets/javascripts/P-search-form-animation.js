$(document).ready(function(){
  // Appear search box
  $(".P-submit-search").mouseover(function(){
    $(".P-input-home-search").css("opacity", "1");
    $(".P-input-home-search").css("width", "80%");
    $(".P-input-home-search").focus();
  },);

  // Hide search box
  $(".P-input-home-search").focusout(function(){
    setTimeout(function(){
      $(".P-input-home-search").css("opacity", "0");
      $(".P-input-home-search").css("width", "0%");
    }, 2000);
  });
});


