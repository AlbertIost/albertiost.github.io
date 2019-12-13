$(document).ready(function(){
	$('.accordion-title').click(function(){
		$(this).next('.accordion-content').slideToggle(300);
		$(this).children('.arrow').toggleClass('arrow-active');
	});
});