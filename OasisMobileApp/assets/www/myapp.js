function DOMLoaded() {
	document.addEventListener("deviceready", phonegapLoaded, false);	
}

function phonegapLoaded() {
}

function alert() {
	navigator.notification.alert(
		'Hello world', 
		dismissed, 
		'Alert',
		'Done'
	);
}

function dismissed() {
	$(function() {
		$("body").append("<h1>DISMISSED</h1>");
	});
}

function confirm() {
	navigator.notification.confirm(
		'What bread would you like', 
		onConfirm, 
		'Confirmation',
		'Whole Grain,Brown Bread,White Bread'
	);
}

function onConfirm(button) {
	if (button == 1) {
			$(function() {
		$("body").append("<h1>Whole Grain</h1>");
	});
	} 
	
	if (button == 2) {
			$(function() {
		$("body").append("<h1>Brown Bread</h1>");});
	}
	
	if  (button == 3){
	$(function() {
		$("body").append("<h1>White Bread</h1>"); });
	}
}
