var slideButton = document.getElementsByClassName("H-slide-button")[0];
var menu = document.getElementsByClassName("H-admin-menu")[0];
var content = document.getElementsByClassName("H-admin-content")[0];

function init(){

	// when click on slide button
	slideButton.addEventListener("click", function(){
		if (slideButton.innerHTML == "X"){
			menu.style.width = "0";
			content.style.right = "0";
			slideButton.innerHTML = "=";
		}
		else{
			menu.style.width = "260px";
			menu.style.left = "auto";
			menu.style.right = "0";
			content.style.right = "260px";
			slideButton.innerHTML = "X";
		};
	});
};

init();

// when resize the window => check for changing layout
document.getElementsByTagName("body")[0].onresize = function(){
	if (window.outerWidth > 1000){
		menu.style.width = "260px";
		menu.style.right = "auto";
		menu.style.left = "0";
		content.style.right = "0";
		content.style.width = "calc(100vw - 260px)";
		slideButton.style.display = "none";
	}
	else{
		slideButton.style.display = "block";
		content.style.width = "100vw";
		if (slideButton.innerHTML == "X"){
			menu.style.width = "260px";
			menu.style.left = "auto";
			menu.style.right = "0";
			content.style.right = "260px";
			slideButton.innerHTML = "X";
		}
		else{
			menu.style.width = "0";
			content.style.right = "0";
			slideButton.innerHTML = "=";
		};
	}
};