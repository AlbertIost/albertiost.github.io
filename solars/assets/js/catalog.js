$(document).ready(() => {
    $('.sidebar .settings .title').click(function(){
        $(this).siblings('div').slideToggle();
        $(this).toggleClass('active');
    });

    $('.sort').click(function(){
        $(this).find('ul').stop().slideToggle();
        $(this).toggleClass('active');
    });

    $('.products-list .product a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).find('svg:first-child').stop().fadeToggle(300);
        $(this).find('svg:last-child').stop().fadeToggle(300);
    });

    $('.sidebar .view-all').click(function(){
        $(this).siblings('ul').css('height', '100%');
        $(this).css('display', 'none');
    });

    let showItem = document.querySelectorAll('.sidebar .setting[data-maxitem]');

    showAll(showItem);

    function showAll(showItem){
        showItem.forEach((element, index) => {
            let maxItem = element.dataset.maxitem;
            let item = element.querySelectorAll('ul li');
            let maxHeight = maxItem * item[0].offsetHeight;
            element.querySelector('ul').style.height = maxHeight + 'px';
        });
    }

    var twobombSlider = (function() {
        var drag = false;
        let values = [];
      
      
        $(".slider").each(function(i, e) {
            updateView(e);
        });

        $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown", function() {
            drag = $(this);
        })
        $(document).bind("mousemove", function(e) {
            if (!drag)
                return;
            var x = (e.pageX - $(drag).outerWidth() / 2 - $(drag).parent().parent().offset().left) / $(drag).parent().parent().outerWidth();
            if (x < 0) x = 0;
            if (x > 1) x = 1;
            var rp = $(drag).parent().find(".rp");
            var lp = $(drag).parent().find(".lp");
            if ($(drag).hasClass("lp") && x > $(rp).attr("data-pos")) {
                $(rp).attr("data-pos", x);
            }
            if ($(drag).hasClass("rp") && x < $(lp).attr("data-pos")) {
                $(lp).attr("data-pos", x);
            }
            $(drag).attr("data-pos", x);
            updateView($(drag).parent().parent());
        });
        $(document).bind("mouseup", function() {
            drag = false;
        });
      
        function updateView(slider) {
            var startVal = parseInt($(slider).find(".bar").data("start"));
            var endVal = parseInt($(slider).find(".bar").data("end"));
            if (startVal > endVal)
                endVal = startVal;
            startVal = startVal || 0;
            endVal = endVal || 100;
            values = [];
            for (var i = startVal; i <= endVal; i++)
                values.push(i);
            var l = $(slider).find(".lp").attr("data-pos");
            var r = $(slider).find(".rp").attr("data-pos");
            var x = $(slider).outerWidth() * l;
            var w = (r - l) * $(slider).outerWidth();
            $(slider).find(".bar").css({
                left: x + "px",
                width: w + "px"
            });
            var index = Math.round(values.length * l);
            if (index >= values.length)
                index = values.length - 1;
            $(slider).siblings(".input-group").find('input.min').val(values[index] + '$');
            index = Math.round(values.length * r);
            if (index >= values.length)
                index = values.length - 1;
            $(slider).siblings(".input-group").find('input.max').val(values[index] + "$");
        }
        //Фильтры на ввод
        let inputRangeMin = document.querySelector('input.min');
        let inputRangeMax = document.querySelector('input.max');

        inputRangeMin.onkeydown = inputText;
        inputRangeMax.onkeydown = inputText;
        inputRangeMin.oninput = addSymbol;
        inputRangeMax.oninput = addSymbol;
        inputRangeMin.onchange = endInput;
        inputRangeMax.onchange = endInput;

        
        const min = +$('input.min').val().replace('$', '');
        const max = +$('input.max').val().replace('$', '');

        function inputText(e){
            let enabledChars = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8, 37, 39];
            let char = e.keyCode;
            if(enabledChars.indexOf(char) == -1)
                return false;
        }
        function addSymbol(e){
            let str = this.value;
            str = str.replace('$', '');
            str = str + '$';
            this.value = str;
        }
        function endInput(e){
            let thisValue = +this.value.replace('$', '');
            if(thisValue > max)
                this.value = max + '$';
            if(thisValue < min)
                this.value = min + '$';
            thisValue = +this.value.replace('$', '');
            let x = (thisValue - min) / (max - min);
            if(this.className == 'min')
                $('.range .slider .lp').attr('data-pos', x);
            if(this.className == 'max')
                $('.range .slider .rp').attr('data-pos', x);
            updateView($('.range .slider'));
        }
    })();
    
    $('.recommended .slider-products').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8269 11.6542L1.07644 0.154077C0.837189 -0.0441597 0.441665 -0.0529723 0.192632 0.138467C-0.0564011 0.329391 -0.0649557 0.6458 0.17312 0.84549L13.5098 11.9999L0.173061 23.1543C-0.0650148 23.354 -0.0564593 23.6704 0.192574 23.8613C0.313458 23.9541 0.469675 24 0.62472 24C0.78955 24 0.953092 23.9483 1.07638 23.8457L14.8269 12.3456C15.0577 12.1522 15.0577 11.8475 14.8269 11.6542Z" fill="#424242" fill-opacity="0.7"/></svg></div>',
        nextArrow: '<div class="next"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8269 11.6542L1.07644 0.154077C0.837189 -0.0441597 0.441665 -0.0529723 0.192632 0.138467C-0.0564011 0.329391 -0.0649557 0.6458 0.17312 0.84549L13.5098 11.9999L0.173061 23.1543C-0.0650148 23.354 -0.0564593 23.6704 0.192574 23.8613C0.313458 23.9541 0.469675 24 0.62472 24C0.78955 24 0.953092 23.9483 1.07638 23.8457L14.8269 12.3456C15.0577 12.1522 15.0577 11.8475 14.8269 11.6542Z" fill="#424242" fill-opacity="0.7"/></svg></div>', 
    });
});