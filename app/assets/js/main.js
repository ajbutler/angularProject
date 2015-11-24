var appCanvas = {
	offCanvasOpen: function(){
		document.getElementById('off-canvas__trigger').classList.add('is--active');
		document.body.classList.add('navigation--active');
		var navigationItems = document.querySelectorAll('.main__navigation .menu > li');

		for(var i = 0; navigationItems.length > i; i++){
			var currentNavItem = navigationItems.item(i);
			openDelay(currentNavItem, i);
		}

		function openDelay(element, iteration){
		 	setTimeout(function() {
				element.classList.add('is--visible');
	 		}, 200*iteration);
		}
	},
	offCanvasClose: function(){
		document.getElementById('off-canvas__trigger').classList.remove('is--active');
		document.body.classList.remove('navigation--active');
		var navigationItems = document.querySelectorAll('.main__navigation .menu > li');

		for(var i = (navigationItems.length - 1); i >= 0; i--){
			var currentNavItem = navigationItems.item(i);
			closeDelay(currentNavItem, i);
		}

		function closeDelay(element, iteration){
		 	setTimeout(function() {
				element.classList.remove('is--visible');
	 		}, 200*iteration);
		}
	},
	canvasInit: function(){
		var menuTrigger = document.getElementById('off-canvas__trigger');
		menuTrigger.addEventListener("click", function(e){
			e.preventDefault();
			if(menuTrigger.classList.contains('is--active')){
				appCanvas.offCanvasClose();
			} else {
				appCanvas.offCanvasOpen();
			}
		}, false);
	},
	submenuInit: function(){
		var subMenuTrigger = document.querySelectorAll('.main__navigation .menu .has-submenu');
		for(var i = 0; subMenuTrigger.length > i; i++){
			var currentSubItem = subMenuTrigger.item(i);
			currentSubItem.addEventListener("click", function(e){
				e.preventDefault();
				if(currentSubItem.classList.contains('is--active')){
					currentSubItem.classList.remove('is--active');
				} else {
					currentSubItem.classList.add('is--active');
				}
			}, false);
		}
	}
}

var appChangeView = {
	mobileNavChange: function(){
		var navigation = document.querySelectorAll('.main__navigation li a:not(.has-submenu)');
		var subMenuTrigger = document.querySelectorAll('.main__navigation .menu .has-submenu');

		for(var i = 0; navigation.length > i; i++){
			navigation.item(i).addEventListener("click", function(e){

			for(var i = 0; subMenuTrigger.length > i; i++){
				if(subMenuTrigger.item(i).classList.contains('is--active')) {
					subMenuTrigger.item(i).classList.remove('is--active');
					setTimeout(function() { 
						appCanvas.offCanvasClose(); 
					}, 1000);
				} else {
					appCanvas.offCanvasClose();
				}
			}
			}, false);
		}
	}
}


function appInit(){
	appChangeView.mobileNavChange();
	appCanvas.canvasInit();
	appCanvas.submenuInit();
}

window.onload = appInit();