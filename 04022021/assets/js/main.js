$(document).ready(function(){
	$('.menu-btn').click(function(e){
		e.preventDefault;
		$(this).toggleClass('menu-btn_active');
		$(this).next('.menu-top').slideToggle(300);
	});
	$('.login-auth .mini-avatar').click(function(){
		$(this).next('.actions').slideToggle(300);
	});
});