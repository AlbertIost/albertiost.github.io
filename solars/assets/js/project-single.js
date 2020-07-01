$(document).ready(() => {
    let sliderImg = document.querySelectorAll('#project-single .photo img');
    let nav = document.querySelectorAll('#project-single .previews div');
    let prev = document.querySelector('#project-single .photo .prev');
    let next = document.querySelector('#project-single .photo .next');

    nav.forEach((el, i) => {
        el.onclick = () => toggleSlide(i);
    });

    prev.onclick = () => flipSlide('prev');
    next.onclick = () => flipSlide('next');

    function flipSlide(action){
        let activeSlideIndex;
        let nextSlideIndex;

        sliderImg.forEach((el, i) => {
            if( $(el).css('display') == 'block' )
                activeSlideIndex = i;
        });

        if(action == 'next'){
            if(activeSlideIndex == sliderImg.length - 1)
                nextSlideIndex = 0;
            else
                nextSlideIndex = activeSlideIndex + 1;
        }
        else{
            if(activeSlideIndex == 0)
                nextSlideIndex = sliderImg.length - 1;
            else
                nextSlideIndex = activeSlideIndex - 1;
        }

        toggleSlide(nextSlideIndex);
    }

    function toggleSlide(index){
        if($(sliderImg[index]).css('display') == 'none'){
            $(sliderImg).fadeOut();
            $(sliderImg[index]).fadeIn();
        }
    }
});