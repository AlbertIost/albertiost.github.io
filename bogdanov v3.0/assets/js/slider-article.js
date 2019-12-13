$(document).ready(function(){
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