document.addEventListener("turbolinks:load", function (event){

var informationButton = document.getElementsByClassName("H-admin-profile-right-column-menu-elements")[0];
var settingsButton = document.getElementsByClassName("H-admin-profile-right-column-menu-elements")[1];
var submitInfoButton = document.getElementsByClassName("H-admin-profile-settings-submit-button")[0];
var submitPasswordButton = document.getElementsByClassName("H-admin-profile-settings-submit-button")[1];

informationButton.addEventListener("click", function(){
	informationButton.style.borderBottomColor = "rgba(0, 0, 0, 0)";
	informationButton.style.borderTopColor = "red";
	settingsButton.style.borderBottomColor = "rgb(100, 100, 100)";
	settingsButton.style.borderTopColor = "rgba(0, 0, 0, 0)";
	document.getElementsByClassName("H-admin-profile-information")[0].style.display = "block";
	document.getElementsByClassName("H-admin-profile-settings")[0].style.display = "none";
});

settingsButton.addEventListener("click", function(){
	informationButton.style.borderBottomColor = "rgb(100, 100, 100)";
	informationButton.style.borderTopColor = "rgba(0, 0, 0, 0)";
	settingsButton.style.borderBottomColor = "rgba(0, 0, 0, 0)";
	settingsButton.style.borderTopColor = "red";
	document.getElementsByClassName("H-admin-profile-information")[0].style.display = "none";
	document.getElementsByClassName("H-admin-profile-settings")[0].style.display = "block";
});

submitInfoButton.addEventListener("click", function(event){
	
	for (var i = 0; i <= 6; i++) document.getElementsByClassName("H-admin-profile-error")[i].style.visibility = "hidden";
	var valid = true;

	// full name
	if (document.getElementsByClassName("H-admin-profile-settings-content")[0].value == ""){
		document.getElementsByClassName("H-admin-profile-error")[0].style.visibility = "visible";
		valid = false;
	};

	// display name
	if (document.getElementsByClassName("H-admin-profile-settings-content")[1].value == ""){
		document.getElementsByClassName("H-admin-profile-error")[1].style.visibility = "visible";
		valid = false;
	};

	// position
	if (document.getElementsByClassName("H-admin-profile-settings-content")[3].value == ""){
		document.getElementsByClassName("H-admin-profile-error")[3].style.visibility = "visible";
		valid = false;
	};

	// email
	var emailInputted = document.getElementsByClassName("H-admin-profile-settings-content")[4];
    if (((emailInputted.value.indexOf("@") == -1) || (emailInputted.value.indexOf(".") == -1)) || (emailInputted.value.indexOf("@") > emailInputted.value.lastIndexOf("."))){
		document.getElementsByClassName("H-admin-profile-error")[4].innerHTML = "Invalid email address!"
		document.getElementsByClassName("H-admin-profile-error")[4].style.visibility = "visible";
		valid = false;
	}
	if (emailInputted.value == ""){
		document.getElementsByClassName("H-admin-profile-error")[4].innerHTML = "Email must be filled out"
		document.getElementsByClassName("H-admin-profile-error")[4].style.visibility = "visible";
		valid = false;
	};

	// phone
	if (document.getElementsByClassName("H-admin-profile-settings-content")[5].value == ""){
		document.getElementsByClassName("H-admin-profile-error")[5].style.visibility = "visible";
		valid = false;
	};

	// status
	if (document.getElementsByClassName("H-admin-profile-settings-content")[6].value == ""){
		document.getElementsByClassName("H-admin-profile-error")[6].style.visibility = "visible";
		valid = false;
	};

	if (valid == false) event.preventDefault();
});

submitPasswordButton.addEventListener("click", function(event){
	
	for (var i = 7; i <= 9; i++) document.getElementsByClassName("H-admin-profile-error")[i].style.visibility = "hidden";
	var valid = true;

	// current password
	var currentPasswordBackend = "abcdef" //  chỗ này chị Minh lấy nè :">
	var currentPassword = document.getElementsByClassName("H-admin-profile-settings-content")[7];
	if (currentPassword.value != "abcdef"){
		document.getElementsByClassName("H-admin-profile-error")[7].innerHTML = "Wrong pasword!";
		document.getElementsByClassName("H-admin-profile-error")[7].style.visibility = "visible";
		valid = false;
	};
	if (currentPassword.value == ""){
		document.getElementsByClassName("H-admin-profile-error")[7].innerHTML = "Current password must be filled out!";
		document.getElementsByClassName("H-admin-profile-error")[7].style.visibility = "visible";
		valid = false;
	};

	// new password
	var newPassword = document.getElementsByClassName("H-admin-profile-settings-content")[8];
	if (newPassword.value.length < 6){
		document.getElementsByClassName("H-admin-profile-error")[8].innerHTML = "New password length must be greater than 5!";
		document.getElementsByClassName("H-admin-profile-error")[8].style.visibility = "visible";
		valid = false;
	};
	if (newPassword.value == ""){
		document.getElementsByClassName("H-admin-profile-error")[8].innerHTML = "New password must be filled out!";
		document.getElementsByClassName("H-admin-profile-error")[8].style.visibility = "visible";
		valid = false;
	};

	// confirming password
	var confirmingPassword = document.getElementsByClassName("H-admin-profile-settings-content")[9];
	if (confirmingPassword.value != newPassword.value){
		document.getElementsByClassName("H-admin-profile-error")[9].innerHTML = "Does not match new password!";
		document.getElementsByClassName("H-admin-profile-error")[9].style.visibility = "visible";
		valid = false;
	};
	if (confirmingPassword.value == ""){
		document.getElementsByClassName("H-admin-profile-error")[9].innerHTML = "New password must be confirmed!";
		document.getElementsByClassName("H-admin-profile-error")[9].style.visibility = "visible";
		valid = false;
	};

	if (valid == false) event.preventDefault();
});

});