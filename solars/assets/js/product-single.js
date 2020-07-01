$(document).ready(() => {
    let sliderImg = document.querySelectorAll('#product-single .slider-product img');
    let nav = document.querySelectorAll('#product-single .slider-nav div');
    let plus = document.querySelector('#product-single .btn-group .input-group .plus');
    let minus = document.querySelector('#product-single .btn-group .input-group .minus');
    let numInput = document.querySelector('#product-single .btn-group .input-group input');
    let addCart = document.querySelector('#product-single .product-description a.btn');

    addCart.onclick = addedCart;

    numInput.onkeypress = keyPressNum;
    numInput.onkeydown = inputNum;
    plus.onclick = () => numFunc('+');
    minus.onclick = () => numFunc('-');

    nav.forEach((el, i) => {
        el.onclick = () => toggleSlide(i);
    });

    function addedCart(e){
        e.preventDefault();
        $(this).parent().css('display', 'none');
        $(this).parent().siblings('.blue').css('display', 'flex');
    }

    function toggleSlide(index){
        if($(sliderImg[index]).css('display') == 'none'){
            $(sliderImg).fadeOut();
            $(sliderImg[index]).fadeIn();
        }
    }

    function numFunc(action){
        let amount = numInput.value;
        
        if(action == '+') amount++;
        else if (amount > 0) amount--;

        numInput.value = amount;
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
});