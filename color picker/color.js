let color = 0xff0000
let colorRed = 'ff'
let colorGr = '00'
let colorBlue = '00'
let hue = 0
let satur = 100
let lightness = 10
const ColorYStart = $('.color').offset()['top'];
const ColorHeight = $('.color').height();
let clicking = false;
let clickingS = false;
$('.color').mousedown(() => {
    clicking = true
});
$('.color').mouseup(() => {
    clicking = false
});
$('.color').mousemove(event => {
    if(!clicking) return false;

    posY = (event.pageY - ColorYStart);
    picker = $('.pos');
    pos = (posY - 5) * 100 / ColorHeight;
    if(pos >= 0 && pos <= 100)
        picker.css('top', pos + '%');
    else if(pos > 100)
        picker.css('top', '100%');
    else
        picker.css('top', '0%');

    if(pos >= 0 && pos <= 17){
        colorRed = 255
        ColorBlue = 0
        colorGr = pos / 17 * 0xff
    }
    else if(pos > 17 && pos <= 33){
        colorGr = 255
        colorBlue = 0
        colorRed = 255 - ((pos - 17) / 16 * 0xff)
    }
    else if(pos > 33 && pos <= 50){
        colorRed = 0
        colorGr = 255
        colorBlue = ((pos - 33) / 17 * 0xff)
    }
    else if(pos > 50 && pos <= 66){
        colorRed = 0
        colorBlue = 255
        colorGr = 255 - ((pos - 50) / 16 * 0xff)
    }
    else if(pos > 66 && pos <= 83){
        colorGr = 0
        colorBlue = 255
        colorRed = ((pos - 66) / 17 * 0xff)
    }
    else if(pos > 83 && pos <= 100){
        colorRed = 255
        colorGr = 0
        colorBlue = 255 - ((pos - 83) / 17 * 0xff)
    } 
    colorRed = Math.floor(colorRed).toString(16)
    colorGr = Math.floor(colorGr).toString(16)
    colorBlue = Math.floor(colorBlue).toString(16)
    if(colorRed.length == 1)
        colorRed = '0' + colorRed
    if(colorGr.length == 1)
        colorGr = '0' + colorGr
    if(colorBlue.length == 1)
        colorBlue = '0' + colorBlue
    if(colorRed == 'NaN')
        colorRed = '255'.toString(16)
    hue = Math.floor(pos / 100 * 360)
    if(hue > 360)
        hue = 360
    if(hue < 0)
        hue = 0
    console.log('background-color', `#${colorRed}${colorGr}${colorGr}`)
    ColorChange(hue, satur, lightness, colorRed, colorGr, colorBlue)
});
$('.shade').mousedown(() => {
    clickingS = true
});
$('.shade').mouseup(() => {
    clickingS = false
});
let shadeY = $('.shade').offset()['top'];
let shadeH = $('.shade').height();
let shadeX = $('.shade').offset()['left'];
let shadeW = $('.shade').width();
$('.shade').mousemove(event => {
    if(!clickingS) return false;

    posY = (event.pageY - shadeY) * 100 / shadeH;
    posX = (event.pageX - shadeX) * 100 / shadeW;

    picker = $('.shadePickerWrap');
    
    if(posY > 100)
        posY = 100
    if(posY < 0)
        posY = 0
    picker.css('top', posY + '%');

    if(posX > 100)
        posX = 100
    if(posX < 0)
        posX = 0
    picker.css('left', posX + '%');
    satur = posX
    lightness = (100 - posY) * (100 - posX/2)/100
    ColorChange(hue, satur, lightness, colorRed, colorGr, colorBlue)
});
function ColorChange(h, s, l, r, g, b){
    $('.shade').css('background-color', `#${r}${g}${b}`);
    $('.show').css('background-color', `hsl(${h}, ${s}%, ${l}%)`);
}