$(document).ready(() => {
    let mapsNav = document.querySelectorAll('#contacts nav.navMap li');
    let maps = document.querySelectorAll('#contacts .map .item');

    mapsNav.forEach((el, index) => {
        el.onclick = () => toggleMap(index);
    });

    function toggleMap(index){
        if($(maps[index]).css('display') == 'none'){
            $(mapsNav).removeClass('active');
            $(mapsNav[index]).addClass('active');

            $(maps).fadeOut();
            $(maps[index]).fadeIn();
        }
    }
});