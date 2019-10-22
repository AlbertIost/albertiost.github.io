$(document).ready(function(){
	$('.room-about').next('.room').hide();
	$('.room-about').click(function(){
		$(this).next('.room').slideToggle();
	});
});