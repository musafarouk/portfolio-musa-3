$(document).ready(function(){
//Your code goes here.

	//The line below hides all the html elements 
	$('html').hide();

	//The line below slowly reveals the html elements after that guy up there hides them
	$('html').fadeIn(3000);

	//From this lline below you'll see many failed attempts at adjusting my scrolling speed
	//But i'll get it eventually
	$('html').scroll().slow(2200);

	
					

});