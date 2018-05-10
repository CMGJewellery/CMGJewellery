document.addEventListener("turbolinks:load", function (event){

	var slideButton = document.getElementById("H-slide-button");
	var menu = document.getElementById("H-admin-menu");
	var content = document.getElementById("H-admin-content");
	
	function init(){
	
		// when click on slide button
		slideButton.addEventListener("click", function(){
			if (slideButton.innerHTML == "X"){
				menu.style.right = "-260px";
				content.style.right = "0";
				slideButton.innerHTML = "=";
			}
			else{
				menu.style.left = "auto";
				menu.style.right = "0";
				content.style.right = "260px";
				slideButton.innerHTML = "X";
			};
		});
	
		// when click on show button in menu
		var tittleContainerArr = document.getElementsByClassName("H-admin-menu-tittle-container");
		tittleContainerArr[0].addEventListener("click", function(){
			var index = 0;
			var showButton = document.getElementsByClassName("H-admin-menu-show-button")[0];
			var blockContainer = document.getElementsByClassName("H-admin-menu-block-container")[0]
			if (showButton.innerHTML == "v"){
				blockContainer.style.height = "56px";
				showButton.innerHTML = "^";
			}
			else{
				blockContainer.style.height = "18px";
				showButton.innerHTML = "v";
			};
		});
	};
	
	init();
	
	function checkLayout(){
		if (window.outerWidth > 1000){
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
				menu.style.left = "auto";
				menu.style.right = "0";
				content.style.right = "260px";
				slideButton.innerHTML = "X";
			}
			else{
				menu.style.right = "-260px";
				content.style.right = "0";
				slideButton.innerHTML = "=";
			};
		}
	};
	
	// when page loaded or resize the window => check for changing layout
	document.getElementsByTagName("body")[0].onload = function(){
		checkLayout();
	};
	document.getElementsByTagName("body")[0].onresize = function(){
		checkLayout();
	};

});