function togglePasswordVisibility() {
  // TODO: https://codepen.io/allurewebsolutions/pen/oxpggw
  var x = document.getElementById("user_password");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("toggle").classList.add("fa-eye-slash");
  } else {
    x.type = "password";
    document.getElementById("toggle").classList.remove("fa-eye-slash");
  }
}