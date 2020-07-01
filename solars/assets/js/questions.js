$(document).ready(() => {
    $('.questions .item p.heading').click(function(){
        $(this).siblings('p.text').fadeToggle();
    });
});