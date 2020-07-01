$(document).ready(() => {
    let numInput = document.querySelectorAll('#cart .table .column-3 .input-group input');
    let minus = document.querySelectorAll('#cart .table .column-3 .input-group .controls .minus');
    let plus = document.querySelectorAll('#cart .table .column-3 .input-group .controls .plus');
    let itemDel = document.querySelectorAll('#cart .table .row-product .column-5 div');
    let item = document.querySelectorAll('#cart .table .row-product');

    numInput.forEach((element) => {
        element.onkeypress = keyPressNum;
        element.onkeydown = inputNum;
    });

    plus.forEach((element, i) => {
        let index = i;
        element.onclick = () => numFunc('+', index);
    });

    minus.forEach((element, i) => {
        let index = i;
        element.onclick = () => numFunc('-', index);
    });

    itemDel.forEach((element, i) => {
        let index = i;
        element.onclick = () => itemDelete(index);
    });

    function numFunc(action, index){
        let amount = numInput[index].value;
        
        if(action == '+') amount++;
        else if (amount > 0) amount--;

        numInput[index].value = amount;
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

    function itemDelete(index){
        item[index].remove();
    }
});