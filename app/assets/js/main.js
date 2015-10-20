var appCanvas = {
	offCanvasOpen: function(){
		document.getElementById('off-canvas__trigger').classList.add('is--active');
		var navigationItems = document.querySelectorAll('.main__navigation ul li');

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
		var navigationItems = document.querySelectorAll('.main__navigation ul li');
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
		menuTrigger.addEventListener("click", function(){
			if(menuTrigger.classList.contains('is--active')){
				appCanvas.offCanvasClose();
			} else {
				appCanvas.offCanvasOpen();
			}
		}, false);
	}
}

var appChangeView = {
	mobileNavChange: function(){
		var navigation = document.getElementsByClassName('main__navigation')[0];
		navigation.addEventListener("click", function(e){
			appCanvas.offCanvasClose();
		}, false);
	}
}


function appInit(){
	appChangeView.mobileNavChange();
	appCanvas.canvasInit();
}

window.onload = appInit();