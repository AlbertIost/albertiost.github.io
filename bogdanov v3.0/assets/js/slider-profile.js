$(document).ready(function(){
	$('.accordion__item-4 .title').click(function(){
		$('.accordion__item .title').not(this).next('.content').slideUp(300);
		$('.accordion__item .title').not(this).children('.arrow').removeClass('arrow-active');
		$(this).next('.content').slideToggle(300);
		$(this).children('.arrow').toggleClass('arrow-active');
		$('.accordion__item-4 .slider-content').slick({
			asNavFor: '.content-dots'
		});

		$('.content-dots').slick({
			slidesToShow: 3,
			asNavFor: '.accordion__item .slider-content',
			focusOnSelect: true
		});
	});
});