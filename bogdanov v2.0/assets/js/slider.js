$(document).ready(function(){
	$('.slider-news').slick({
		asNavFor: '.news-dots'
	});

	$('.news-dots').slick({
		slidesToShow: 3,
		asNavFor: '.slider-news',
		focusOnSelect: true
	});


	$('.content').slick({
		responsive: [{
			breakpoint: 5000,
			settings: 'unslick'
		},
		{
			breakpoint: 1251,
			settings: {
				asNavFor: '.content-dots',
				adaptiveHeight: true,
				slidesToShow: 1,
				infinite: true,
				speed: 300,
				fade: true,
				cssEase: 'ease',
				arrows: true,
				appendArrows: '.content-wrapper',
				prevArrow: '<div class="contentPrev"></div>',
				nextArrow: '<div class="contentNext"></div>'
			}
		}
		]

	});

	$('.content-dots').slick({
		responsive: [{
			breakpoint: 5000,
			settings: 'unslick'
		},
		{
			breakpoint: 1251,
			settings: {
				slidesToShow: 3,
				asNavFor: '.content',
				focusOnSelect: true
			}
		}
		]
	});
});