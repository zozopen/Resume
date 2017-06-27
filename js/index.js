$(function(){
    $('#dowebok').fullpage({
    	navigation : true,
    	resize: true,
    	scrollingSpeed: 300,
    	verticalCentered: false,
    	slidesNavigation: true,
    	controlArrows: false,
    	menu: true,
    });
});
$(document).on('click', '#moveRight', function(){
$.fn.fullpage.moveSlideRight();
});