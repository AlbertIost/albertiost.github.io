$(document).ready(() => {
    $('.slider-main').slick({
        prevArrow: $('.arr-prev'),
        nextArrow: $('.arr-next'),
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('li.has-inner').on('click', function(e){
        e.preventDefault();
        $(this).find('ul').fadeToggle(300);
        menu.removeClass('hovered');
    });
    $(document).mouseup(function (e){
		let menu = $("li.has-inner");
		if (!menu.is(e.target) && menu.has(e.target).length === 0) {
                menu.find('ul').fadeOut();
                menu.removeClass('hovered');
		}
	});
});