$(document).ready(function(){
	$('.accordion__item .title').click(function(){
		$('.accordion__item .title').not(this).next('.content').slideUp(300);
		$('.accordion__item .title').not(this).children('.arrow').removeClass('arrow-active');
		$(this).not('.accordion__item-4 .title').next('.content').slideToggle(300);
		$(this).not('.accordion__item-4 .title').children('.arrow').toggleClass('arrow-active');
	});
});