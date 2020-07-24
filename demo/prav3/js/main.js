$(function(){
	if($('.trainings').length) {
		$('.trainings ul').bxSlider({
			mode: 'fade',
			adaptiveHeight: true
		})
	}
	if($('.reviews').length) {
		$('.reviews ul').bxSlider({
			pager: false,
			mode: 'fade',
			adaptiveHeight: true,
			onSlideBefore: function($slideElement){
				var $data;
				$slideElement.find(".lazy-img").each(function(){

					$data = $(this).data("original");
					$(this).attr("src", $data).removeClass("lazy-img");

				});

			}
		});

		
	}
	if($('.trainings-box').length) {
		$('.trainings-box ul').bxSlider({
			pager: false,
			mode: 'fade',
			adaptiveHeight: true
		})
	}
	if($('.news').length) {
		$('.news ul').bxSlider({
			pager: false,
			mode: 'fade',
			adaptiveHeight: true
		})
	}
	if($('.books').length) {
		$('.books ul').bxSlider({
			pager: false,
			mode: 'fade',
			adaptiveHeight: true
		})
	}
	$('.menu-opener, .close-menu').click(function(){
		$('.menu').slideToggle();
	});

	var e = jQuery.Event("keydown");
	e.which = 40;

	$('.scroll-indicator').click(function() {
		$("body").trigger(e);
	});

	$('.scroll-link').click(function(){
		alert(1);
	});

	if($('.biography').length) {

		if($(window).width() < 1100) {

			$.fn.fullpage.destroy('all');

		} else {

			if (!$.fn.fullpage) {

				$('.biography').fullpage({
					css3: false
				});

			} else {

				$('.biography').fullpage({
					css3: false
				});

			}
		}
	}

	/* reviews count */
	
	var reviewsCount =  $(".reviews").find(".logo-wrap").find("img").length;

	if( reviewsCount ){

		$(".reviews-count").html("Отзывы " + "(" + reviewsCount + ")");

	}

	/* POPUP  */
	$(".popup-img").lightGallery({
		selector: "this",
		counter: false,
		showAfterLoad: false
	});

	$(".popup-pdf").lightGallery({
		selector: "this",
		iframeMaxWidth: "95%",
		counter: false,
		zoom: false,
		showAfterLoad: false
	});


});


$(window).resize(function(){

	if($(window).width() < 1100) {

		$.fn.fullpage.destroy('all');

	} else {

		if (!$.fn.fullpage) {

			$('.biography').fullpage({
				css3: false
			});

		} else {

			$('.biography').fullpage({
				css3: false
			});

		}
	}
});