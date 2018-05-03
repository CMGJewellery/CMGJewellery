$( document ).ready(function() {
  var x = document.getElementById('B-notice');
  if(x === null) return;
  if(x.textContent.length > 8) B_showSnackBar(); // For some reasons it has 8 characters by default
});

function B_showSnackBar() {
  // Get the snackbar DIV
  var x = document.getElementById("B-notice");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}