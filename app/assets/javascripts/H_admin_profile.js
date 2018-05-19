document.addEventListener("turbolinks:load", function (event){

var informationButton = document.getElementsByClassName("H-admin-profile-right-column-menu-elements")[0];
var settingsButton = document.getElementsByClassName("H-admin-profile-right-column-menu-elements")[1];

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

function validateAdminProfile(index){
	for (var i = 0; i <= 9; i++) document.getElementsByClassName("H-admin-profile-error")[i].style.display = none;
	var valid = true;
	if(index == 1){
		if (document.forms["H-admin-profile-information-forms"]["full-name"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[0].style.display = block;
			valid = false;
		};
		if (document.forms["H-admin-profile-information-forms"]["display-name"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[1].style.display = block;
			valid = false;
		};
		if (document.forms["H-admin-profile-information-forms"]["position"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[3].style.display = block;
			valid = false;
		};
		if (document.forms["H-admin-profile-information-forms"]["email"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[4].style.display = block;
			valid = false;
		};
		if (document.forms["H-admin-profile-information-forms"]["phone"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[5].style.display = block;
			valid = false;
		};
		if (document.forms["H-admin-profile-information-forms"]["status"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[6].style.display = block;
			valid = false;
		};
	}
	else{
		if (document.forms["H-admin-profile-information-forms"]["current-password"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[7].style.display = block;
			valid = false;
		};
		if (document.forms["H-admin-profile-information-forms"]["new-password"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[8].style.display = block;
			valid = false;
		};
		if (document.forms["H-admin-profile-information-forms"]["confirming-password"].value == ""){
			document.getElementsByClassName("H-admin-profile-error")[9].style.display = block;
			valid = false;
		};
	}
	return valid;
};

});