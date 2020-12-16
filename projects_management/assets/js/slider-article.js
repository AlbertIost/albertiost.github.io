$(document).ready(function(){
	$('.slider-research').slick({
		dots: true,
		arrows: false,
		appendDots: '.slider-research__dots',
		responsive:[{
			breakpoint: 5000,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
		{
			breakpoint: 1651,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
		{
			breakpoint: 1001,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 601,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	$('.rec-section').slick({
		responsive:[{
			breakpoint: 5000,
			settings: 'unslick'
		},
		{
			breakpoint: 725,
			settings: {
				slidesToShow: 1,
				arrows: true
			}
		}]
	});
});