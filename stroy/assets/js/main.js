$(document).ready(function(){
    let num = 0;
    let items = $('.list').find('input');
    for( let j = 0; j < items.length; j++ ){
        let value = $('.list').find('input:eq(' + j + ')').next('span').text();
        $('.list').find('input:eq(' + j + ')').attr('data-value', value);
    }

    $('.list li').click(function (){
        $(this).next('ul:first').slideToggle();
        $(this).toggleClass('second');
    });
    $('#step-2 .list li label').click(function (e){
        e.preventDefault();
        if( $(this).find('input').prop('checked') ){
            $(this).find('input').prop('checked', false);
            let items = $('.selected');
            let value = $(this).find('input').attr('data-value');
            $('div[data-value="' + value + '"]').remove();
        }
        else{
            $(this).find('input').prop('checked', true);
            let text = $(this).find('span').text();
            let value = $(this).find('input').attr('data-value');
            $('#step-2 .selected .added-wrapper').append('<div class="added" data-value="'+ value +'"><span>' + text + '</span><a href="#"></a></div>');
            k++;
        }
    });
    $('#step-3 .list li label').click(function (e){
        e.preventDefault();
        if( $(this).find('input').prop('checked') ){
            $(this).find('input').prop('checked', false);
            let items = $('.selected');
            let value = $(this).find('input').attr('data-value');
            $('div[data-value="' + value + '"]').remove();
            num--;
            $('#step-3 .cart span').text(num);
        }
        else{
            $(this).find('input').prop('checked', true);
            let text = $(this).find('span').text();
            let value = $(this).find('input').attr('data-value');
            $('#step-3 .selected .added-wrapper').append('<div class="added" data-value="'+ value +'"><span>' + text + '</span><a href="#"></a></div>');
            num++;
            $('#step-3 .cart span').text(num);
        }
    });
    $('html').on('click', '.added', function(){
        let value = $(this).attr('data-value');
        $(this).remove();
        $('.list').find('input[data-value="' + value + '"]').prop('checked', false).closest('li').next('ul:first').slideUp();
        $('.list').find('input[data-value="' + value + '"]').closest('li').removeClass('second');
        num--;
        $('#step-3 .cart span').text(num);
    });

    $('.choose').mCustomScrollbar({theme: "rounded-dots"});
});