function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var index = $(".P-upload-img-field").index(input);
        var imgElement = $('.P-no-img-label');
        var width = $('.P-no-img-label').css("width");
        var height = $('.P-no-img-label').css("height");
        $(imgElement[index])
              .attr('src', e.target.result)
              .width(width)
              .height(height);
      };

      reader.readAsDataURL(input.files[0]);
  }
}