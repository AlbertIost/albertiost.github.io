let ChessBoard = document.querySelector('#main');
let playerWhite = true;

//Задание структуры доски
for(let i = 0; i < 64; i++){
    ChessBoard.insertAdjacentHTML('beforeend', '<div class="cell"></div>');
}

let cell = document.querySelectorAll('#main .cell');

//Установка data атрибутов координат клеток
cell.forEach((element, index, array) => {
    element.setAttribute('data-x', index % 8);
    element.setAttribute('data-y', Math.floor(index / 8));
})

//Окрашивание клеток
cell.forEach((element, index, array) => {
    let x = element.getAttribute('data-x');
    let y = element.getAttribute('data-y');
    if( y % 2 == 1 ){
        if( x % 2 == 1 ){
            element.classList.add('white');
        }
        else{
            element.classList.add('black');
        }
    }
    else{
        if( x % 2 == 0 ){
            element.classList.add('white');
        }
        else{
            element.classList.add('black');
        }
    }
})

//Первоначальная расстановка фигур
cell.forEach((element, index, array) => {
    let y = element.getAttribute('data-y');
    let x = element.getAttribute('data-x');
    if( y == 0 || y == 1 || y == 2){
        if(element.classList.contains('black')){
            setFigure(element, 'bf');
        }
    }
    if( y == 5 || y == 6 || y == 7){
        if(element.classList.contains('black')){
            setFigure(element, 'wf');
        }
    }
})

cell.forEach((element, index, array) => {
    element.onclick = () => {
        step(element);
    }
})

function setFigure(pos, fig){
    pos.classList.add(fig);
}

function step(elementTarget){
    console.log(elementTarget);
}