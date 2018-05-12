document.addEventListener("turbolinks:load", function (event){

	var slideButton = document.getElementById("H-slide-button");
	var slideButtonInner = document.getElementById("H-admin-font-awesome-slide-button");
	var menu = document.getElementById("H-admin-menu");
	var content = document.getElementById("H-admin-content");
	var slideButtonStatus = 0;
	var showButtonStatus = [0, 0, 0, 0];
	
	function init(){
	
		// when click on slide button
		slideButton.addEventListener("click", function(){
			if (slideButtonStatus == 0){
				menu.style.right = "-260px";
				content.style.right = "0";
				slideButtonInner.classList.remove("fa-times");
				slideButtonInner.classList.add("fa-bars");
				slideButtonStatus = 1;
			}
			else{
				menu.style.left = "auto";
				menu.style.right = "0";
				content.style.right = "260px";
				slideButtonInner.classList.remove("fa-bars");
				slideButtonInner.classList.add("fa-times");
				slideButtonStatus = 0;
			};
		});
	
		// when click on show button in menu
		var tittleContainerArr = document.getElementsByClassName("H-admin-menu-tittle-container");
	
		// admin name
		tittleContainerArr[0].addEventListener("click", function(){
			var showButton = document.getElementsByClassName("H-admin-menu-font-awesome-show-button")[0];
			var blockContainer = document.getElementsByClassName("H-admin-menu-block-container")[0]
			if (showButtonStatus[0] == 0){
				blockContainer.style.height = "154px";
				showButton.classList.remove("fa-angle-down");
				showButton.classList.add("fa-angle-up");
				showButtonStatus[0] = 1;
			}
			else{
				blockContainer.style.height = "53px";
				showButton.classList.remove("fa-angle-up");
				showButton.classList.add("fa-angle-down");
				showButtonStatus[0] = 0;
			};
		});
	
		// products
		tittleContainerArr[2].addEventListener("click", function(){
			var showButton = document.getElementsByClassName("H-admin-menu-font-awesome-show-button")[1];
			var blockContainer = document.getElementsByClassName("H-admin-menu-block-container")[2]
			if (showButtonStatus[1] == 0){
				blockContainer.style.height = "154px";
				showButton.classList.remove("fa-angle-down");
				showButton.classList.add("fa-angle-up");
				showButtonStatus[1] = 1;
			}
			else{
				blockContainer.style.height = "53px";
				showButton.classList.remove("fa-angle-up");
				showButton.classList.add("fa-angle-down");
				showButtonStatus[1] = 0;
			};
		});
	
		// accounts
		tittleContainerArr[3].addEventListener("click", function(){
			var showButton = document.getElementsByClassName("H-admin-menu-font-awesome-show-button")[2];
			var blockContainer = document.getElementsByClassName("H-admin-menu-block-container")[3]
			if (showButtonStatus[2] == 0){
				blockContainer.style.height = "154px";
				showButton.classList.remove("fa-angle-down");
				showButton.classList.add("fa-angle-up");
				showButtonStatus[2] = 1;
			}
			else{
				blockContainer.style.height = "53px";
				showButton.classList.remove("fa-angle-up");
				showButton.classList.add("fa-angle-down");
				showButtonStatus[2] = 0;
			};
		});
	
		// orders
		tittleContainerArr[4].addEventListener("click", function(){
			var showButton = document.getElementsByClassName("H-admin-menu-font-awesome-show-button")[3];
			var blockContainer = document.getElementsByClassName("H-admin-menu-block-container")[4]
			if (showButtonStatus[3] == 0){
				blockContainer.style.height = "154px";
				showButton.classList.remove("fa-angle-down");
				showButton.classList.add("fa-angle-up");
				showButtonStatus[3] = 1;
			}
			else{
				blockContainer.style.height = "53px";
				showButton.classList.remove("fa-angle-up");
				showButton.classList.add("fa-angle-down");
				showButtonStatus[3] = 0;
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
			if (slideButtonStatus == 0){
				menu.style.left = "auto";
				menu.style.right = "0";
				content.style.right = "260px";
				slideButtonInner.classList.remove("fa-bars");
				slideButtonInner.classList.add("fa-times");
			}
			else{
				menu.style.right = "-260px";
				content.style.right = "0";
				slideButtonInner.classList.remove("fa-times");
				slideButtonInner.classList.add("fa-bars");
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