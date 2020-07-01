$(document).ready(()=>{
    //Настройки шапки
    $('header .lang').hover(
        () => $('header .lang ul').stop().slideDown(200),
        () => $('header .lang ul').stop().slideUp(200)
    );

    $('header li.has-child').hover(function(){
        $(this).find('ul').stop().slideDown(200);
    },
    function(){
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

    cart.onclick = toggleModal;

    cartModalClose.onclick = toggleModal;

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

    function toggleModal(){
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
});