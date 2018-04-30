$(document).ready(function(){
  // Appear search box
  $(".P-submit-search").click(function(){
    $(".P-input-home-search").css("opacity", "1");
    $(".P-input-home-search").css("width", "80%");
    $("#P-search-bnt").css("display", "none");
    $("#P-search-submit").css("display", "inline");

    setTimeout(function(){
      if(!($(".P-input-home-search").is(":focus"))) {
        $(".P-input-home-search").css("opacity", "0");
        $(".P-input-home-search").css("width", "0%");
        $("#P-search-bnt").css("display", "inline");
        $("#P-search-submit").css("display", "none");
      };
    }, 3000);
  },);

  // // Hide search box
  // $(".P-input-home-search").focusout(function(){
  //   $(".P-input-home-search").css("opacity", "0");
  //   $(".P-input-home-search").css("width", "0%");
  // });

  // Hide search box
  $(".P-input-home-search").focusout(function(){
    setTimeout(function(){
      $(".P-input-home-search").css("opacity", "0");
      $(".P-input-home-search").css("width", "0%");
      $("#P-search-bnt").css("display", "inline");
      $("#P-search-submit").css("display", "none");
    }, 3000);
  });
});


