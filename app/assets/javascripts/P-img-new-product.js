function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var index = $(".P-upload-img-field").index(input);
        var imgElement = $('.P-no-img-label');
        $(imgElement[index])
              .attr('src', e.target.result)
              .width(200)
              .height(200);
      };

      reader.readAsDataURL(input.files[0]);
  }
}