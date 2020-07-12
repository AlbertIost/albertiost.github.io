$(document).ready(()=>{
    //Настройки шапки
    $('header .lang').on('mouseover', () => $('header .lang ul').stop().slideDown(200));
    $('header .lang').on('mouseout', () => $('header .lang ul').stop().slideUp(200));

    $('header .numbers').hover(
        () => $('header .numbers ul').stop().slideDown(200),
        () => $('header .numbers ul').stop().slideUp(200)
    );

    $('header li.has-child').on('mouseover', function(){
        $(this).find('ul').stop().slideDown(200);
    });
    $('header li.has-child').on('mouseout', function(){
        $(this).find('ul').stop().slideUp(200);
    });

    let headerHeight = $('header.home').outerHeight();
    
    let offSetTop = $(window).scrollTop();
    if(offSetTop > headerHeight)
        $('header.home').addClass('fixed');
    else
        $('header.home').removeClass('fixed');
    $(window).scroll(function(){
        offSetTop = $(window).scrollTop();
        if(offSetTop > headerHeight)
            $('header.home').addClass('fixed');
        else
            $('header.home').removeClass('fixed');
    });

    let numInput = document.querySelectorAll('header .cart .num .input-group input');
    let minus = document.querySelectorAll('header .cart .num .input-group .btns .minus');
    let plus = document.querySelectorAll('header .cart .num .input-group .btns .plus');
    let itemDel = document.querySelectorAll('header .cart .item .delete');
    let item = document.querySelectorAll('header .cart .item');
    let cartModalClose = document.querySelector('header .cart .close');
    let cart = document.querySelector('header .cart .cart-icon');

    numInput.forEach((element) => {
        element.onkeypress = keyPressNum;
        element.onkeydown = inputNum;
    });

    plus.forEach((element, i) => {
        let index = i;
        element.onclick = () => numFunc('+', index);
    });

    minus.forEach((element, i) => {
        let index = i;
        element.onclick = () => numFunc('-', index);
    });
    
    itemDel.forEach((element, i) => {
        let index = i;
        element.onclick = () => itemDelete(index);
    });

    function itemDelete(index){
        item[index].remove();
    }

    function numFunc(action, index){
        let amount = numInput[index].value;
        
        if(action == '+') amount++;
        else if (amount > 0) amount--;

        numInput[index].value = amount;
    }

    function keyPressNum(evt){
        let theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        let regex = /[0-9]|\./;
        if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) 
                theEvent.preventDefault();
        }
    }

    function inputNum(){
        if(this.value == 0)
            this.value = this.value.slice(1);
    }

    function toggleModal(e){
        e.preventDefault();
        $('header .cart .modal').fadeToggle();
        $('header .cart .cart-icon').toggleClass('active');
    }

    $('#product-example .slider-products .addToCart').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).find('svg:first-child').stop().fadeToggle(300);
        $(this).find('svg:last-child').stop().fadeToggle(300);
    });

    $('.questions .item p.heading').click(function(){
        $(this).siblings('p.text').stop().slideToggle();
        $(this).parent().toggleClass('active');
    });

    let bgBlog = document.querySelectorAll('#blog a[data-bg]');
    bgBlog.forEach(function(element, index){
        let itemBg = element.dataset.bg;
        element.style.backgroundImage = `url('${itemBg}')`;
    });

    //Настройки блока с проектами
    $('#our-projects .item').on('mouseover', function(){
        $(this).find('.characteristics').stop().slideDown(300);
    });
    $('#our-projects .item').on('mouseout', function(){
        $(this).find('.characteristics').stop().slideUp(300);
    });
    $('#projects .item').on('mouseover', function(){
        $(this).find('.characteristics').stop().slideDown(300);
    });
    $('#projects .item').on('mouseout', function(){
        $(this).find('.characteristics').stop().slideUp(300);
    });

    //Настройка блока с блогом
    $('#blog .item').on('mouseover', function(){
        $(this).find('.characteristics').stop().slideDown(300);
    });
    $('#blog .item').on('mouseout', function(){
        $(this).find('.characteristics').stop().slideUp(300);
    });

    $('.thank-you .cross').on('click', () => $('.thank-you').fadeOut());

    //media queries
    $(window).resize(() => {
        if( $(window).width() <= 992 )
            mediaQueriesMobile();
        else
            mediaQueriesDesktop();
    });
    if( $(window).width() <= 992 )
        mediaQueriesMobile();
    else
        mediaQueriesDesktop();

    function mediaQueriesMobile(){
        $('header').append($('header .center'));

        $('header li.has-child').off('mouseover');
        $('header li.has-child').off('mouseout');

        $('header .lang').off('mouseover');
        $('header .lang').off('mouseout');

        $('#blog .item').off('mouseover');
        $('#blog .item').off('mouseout');

        $('#our-projects .item').off('mouseover');
        $('#our-projects .item').off('mouseout');

        $('#projects .item').off('mouseover');
        $('#projects .item').off('mouseout');

        $('header li.has-child > a').on('click', function(e){
            e.preventDefault();
            $(this).siblings('ul').slideToggle(300);
        });;

        if(!checkEvent($('.burger-menu'), 'click')){
            $('header .burger-menu').on('click', function(){
                $('header .center').slideToggle();
                $(this).toggleClass('opened');
            });
        }

        function eventsList(element) {
            // В разных версиях jQuery список событий получается по-разному
            var events = element.data('events');
            if (events !== undefined) return events;
    
            events = $.data(element, 'events');
            if (events !== undefined) return events;
    
            events = $._data(element, 'events');
            if (events !== undefined) return events;
    
            events = $._data(element[0], 'events');
            if (events !== undefined) return events;
    
            return false;
        }
        function checkEvent(element, eventname) {
            var events,
                ret = false;
    
            events = eventsList(element);
            if (events) {
                $.each(events, function(evName, e) {
                    if (evName == eventname) {
                        ret = true;
                    }
                });
            }
    
            return ret;
        }

    }
    function mediaQueriesDesktop(){
        $('header .left').after($('header .center'));
        cart.onclick = toggleModal;
        cartModalClose.onclick = toggleModal;
    }
});