$(document).ready(function(){
  // Appear search box
  $(".P-submit-search").mouseover(function(){
    $(".P-input-home-search").css("opacity", "1");
    $(".P-input-home-search").css("width", "80%");
  },);

  // Hide search box
  $(".P-input-home-search").focusout(function(){
    $(".P-input-home-search").css("opacity", "0");
    $(".P-input-home-search").css("width", "0%");
  });

  // Hide search box
  $(".P-input-home-search").mouseout(function(){
    if (!($(".P-input-home-search").is(":focus"))){
      $(".P-input-home-search").css("opacity", "0");
      $(".P-input-home-search").css("width", "0%");
    };
  });
});


