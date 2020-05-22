$(document).ready(function(){
    //compile info about imgs
    let img = $('a.photo');
    let img_info = [];
    for(let i = 0; i < img.length; i++){
        img.eq(i).attr('data-id', i);
        img_info[i] = [];
        img_info[i][0] = i;
        img_info[i][1] = img.eq(i).attr('data-src');
        img_info[i][2] = img.attr('data-text');
    }
    console.log(img_info);
    //end compile
    //open modal
    $('a.photo').click(function(e){
        e.preventDefault();
        
        for(let i = 0; i < img_info.length; i++){
            if($(this).attr('data-id') == img_info[i][0]){
                $('.modal-wrapper img').attr('src', img_info[i][1]);
                $('.modal-wrapper .modal-footer p').html(img_info[i][2]);
                $('.modal-img').attr('data-set', i);
                $('.modal-wrapper').addClass('opened');
                $('.modal-wrapper').fadeIn();
            }
        }
    });
    //end 'open modal'
    //prev/next
    $('.img-prev').click(function(){
        let img_index = +$('.modal-img').attr('data-set') - 1;
        if(img_index >= 0){
            for(let i = 0; i < img_info.length; i++){
                if(img_index == img_info[i][0]){
                    toggleImg(i);
                }
            }
        }
        else{
            img_index = img_info.length - 1;
            toggleImg(img_index);
        }
    });
    $('.img-next').click(function(){
        let img_index = +$('.modal-img').attr('data-set') + 1;
        if(img_index < img_info.length){
            for(let i = 0; i < img_info.length; i++){
                if(img_index == img_info[i][0]){
                    toggleImg(i);
                }
            }
        }
        else{
            toggleImg(0);
        }
    });
    function toggleImg(index){
        $('.modal-img').attr('data-set', index);
        $('.modal-wrapper img').attr('src', img_info[index][1]);
        $('.modal-wrapper .modal-footer p').html(img_info[index][2]);
    }
    //bind key for modal toggle
    $(document).on("keydown", function(e){
        if($('.modal-wrapper').hasClass('opened')){
            if(e.key == 'ArrowLeft'){
                $('.img-prev').trigger('click');
            }
            if(e.key == 'ArrowRight'){
                $('.img-next').trigger('click');
            }
        }
    });
    //end prev/next
    //close modal
    $(document).mouseup(function (e){
		let modal_window = $('.modal-img');
		if (!modal_window.is(e.target) && modal_window.has(e.target).length === 0) {
            $('.modal-wrapper').fadeOut();
            $('.modal-wrapper').removeClass('opened');
		}
    });
    //end 'close modal'
});