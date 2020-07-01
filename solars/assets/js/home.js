$(document).ready(() => {
    //Слайдер в секции product-example
    let itemWidth = +$('.slider-products .item').css('width').replace(/[^-0-9]/gim,'');
    let sliderProductsWidth = $('.slider-products .item').length * itemWidth;
    let sectionPadding = +$('#product-example').css('width').replace(/[^-0-9]/gim,'') - +$('#product-example .container-fix').css('width').slice(0, $('#product-example .container-fix').length - 3);
    let maxML = +$('#product-example').css('width').replace(/[^-0-9]/gim,'') - sliderProductsWidth - sectionPadding;
    
    console.log();

    $('.slider-products').css('display', 'flex');

    $('.slider-products').css('width', sliderProductsWidth + 'px');
    let startPos, ml, nextPos;
    $('.slider-products').mousedown(function(eventStart){
        startPos = eventStart.clientX;
        $(this).on('mousemove', function(event){
            ml = +$(this).css('margin-left').replace(/[^-0-9]/gim,'');
            nextPos = event.clientX;
            let offSet = nextPos - startPos;
            startPos = nextPos;
            console.log(`maxML: ${maxML}, ml: ${ml}`);
            if((maxML <= ml || offSet > 0) && (ml <= 0 || offSet < 0 ))
                $(this).css('margin-left', `${ml + offSet}px`);
        });
    });
    $('.slider-products').mouseup(function(){
        $(this).off('mousemove');
    });

    //Настройки слайдера на первом экране
    $('.slider-main').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000
    });
    //Конец настроек слайдера на первом экране

    //Настройки слайдера в секции About
    $('.slider-about').slick({
        prevArrow: $('.prevAbout'),
        nextArrow: $('.nextAbout'),
        appendDots: $('.slider-wrapper .dots'),
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        fade: true
    });
    $('.sliderNav').slick({
        asNavFor: '.slider-about',
        arrows: false,
        slidesToShow: 3,
        focusOnSelect: true
    });

    $('.slider-about').on('afterChange', function(event, slick, currentSlide){
        if (currentSlide == 0) {
            $('.sliderNav .dot').removeClass('active');
            $('.sliderNav .dot').eq(0).addClass('active');
            $('.slider-wrapper .progress .line-black').css('width', '33.3%');
            $('.slider-wrapper .progress .end').removeClass('active');
        }else if(currentSlide == 1) {
            $('.sliderNav .dot').removeClass('active');
            $('.sliderNav .dot').eq(1).addClass('active');
            $('.slider-wrapper .progress .line-black').css('width', '66.7%');
            $('.slider-wrapper .progress .end').removeClass('active');
        }else if(currentSlide == 2) {
            $('.sliderNav .dot').removeClass('active');
            $('.sliderNav .dot').eq(2).addClass('active');
            $('.slider-wrapper .progress .line-black').css('width', '100%');
            $('.slider-wrapper .progress .end').addClass('active');
        }
    });
    //Конец настроек слайдера в секции About
    
    //Настройки блока для предприятий и для частных

    $('.transformed-item').hover(function(){
        $('.transformed-item').not(this).find('.bg').addClass('inactive');
        $(this).find('.bg').addClass('active');
    }, 
    function(){
        $('.transformed-item').not(this).find('.bg').removeClass('inactive');
        $(this).find('.bg').removeClass('active');
    });

    //Скролл с хедера
    $(".down").click(function(){
        $("html, body").animate({
            scrollTop: $("section#first").height()}, 
            500
        );
    });

    //Настройки блока с проектами
    $('#our-projects .item').hover(function(){
        $(this).find('.characteristics').stop().slideDown(300);
    },
    function(){
        $(this).find('.characteristics').stop().slideUp(300);
    });

    //Настройка блока с блогом
    $('#blog .item').hover(function(){
        $(this).find('.characteristics').stop().slideDown(300);
    },
    function(){
        $(this).find('.characteristics').stop().slideUp(300);
    });
});