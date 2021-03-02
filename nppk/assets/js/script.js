if(localStorage.getItem('activeFontSize') != null && localStorage.getItem('activeColor') != null){
    setFontSize(localStorage.getItem('activeFontSize'));
    setColorScheme(localStorage.getItem('activeColor'));
}
//Активация версии для слабовидящих
document.querySelector('.visuallyImp').addEventListener('click', (e) => {visuallyImpairedToggle(e, 'on')});
//Деактивация версии для слабовидящих
document.querySelector('.visually_impaired-switch').addEventListener('click', (e) => {visuallyImpairedToggle(e, 'off')});
//Функция деактивации/активации версии для слабовидящих
function visuallyImpairedToggle(e, action){
    e.preventDefault();
    if(action == 'on'){
        document.body.classList.add('visually-impaired');
        setFontSize('normal');
        setColorScheme('normal');
    }
    else if(action == 'off'){
        document.body.className = '';
        localStorage.removeItem('activeFontSize');
        localStorage.removeItem('activeColor');
    }
    localStorage.setItem('bodyclass', document.body.className);
}
//Смена размера шрифта
let font_list = document.querySelectorAll('.font_list > div');
font_list.forEach(el => {
    let size = el.getAttribute('data-value');
    el.onclick = () => {
        setFontSize(size);
    }
});
function setFontSize(size){
    document.querySelector('.font_list .active').classList.remove('active');
    document.querySelector(`.font_list-${size}`).classList.add('active');
    document.body.classList.remove(`font-normal`);
    document.body.classList.remove(`font-big`);
    document.body.classList.remove(`font-biggest`);
    document.body.classList.add(`font-${size}`);
    document.body.classList.add('visually-impaired');
    localStorage.setItem('activeFontSize', size);
}
//Смена цветовой схемы
let color_list = document.querySelectorAll('.color_list > div');
color_list.forEach(el => {
    let color = el.getAttribute('data-value');
    el.onclick = () => {
        setColorScheme(color);
    }
});
function setColorScheme(color){
    document.querySelector('.color_list .active').classList.remove('active');
    document.querySelector(`.color_list-${color}`).classList.add('active');
    document.body.classList.remove('color-normal');
    document.body.classList.remove('color-inverse');
    document.body.classList.remove('color-blue');
    document.body.classList.remove('color-beige');
    document.body.classList.add(`color-${color}`);
    document.body.classList.add('visually-impaired');
    localStorage.setItem('activeColor', color);
}