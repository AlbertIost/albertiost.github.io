$(document).ready(() => {
    let addedDish = [];//хранит индексы добавленных блюд
    let dishes = $('.menu-item');
    let dishesTitle = dishes.find('.title');
    let dishesPrice = dishes.find('.price');
    let dishesId = [];

    for(let i = 0; i < dishes.length; i++){
        dishesTitle[i] = dishesTitle.eq(i).text();
        dishesPrice[i] = +dishesPrice.eq(i).text();
        dishesId[i] = i + 1;
    }
    for(let i = 0; i < dishes.length; i++){
        $('.menu .item-control').eq(i).attr('data-dish', dishesTitle[i]);
    }
    let contInItem = $('.item .item-control');
    for(let i = 0; i < contInItem.length; i++){
        contInItem.eq(i).attr('data-dish', contInItem.eq(i).parent().siblings('.title').text());
    }
    let totalPrice = 0;
    $('.item-control').on('click', function(){
        let dish = $(this).attr('data-dish');

        if( $(this).hasClass('added') ){//если выбран
                $(`.item-control[data-dish="${dish}"]`).removeClass('added');

                for(let i = 0; i < addedDish.length; i++){
                    if(addedDish[i] == dish){
                        addedDish.splice(i, 1);
                    }
                }
        }
        else{//если не выбран
            $(`.item-control[data-dish="${dish}"]`).addClass('added');
            for(let i = 0; i < dishesTitle.length; i++){
                if(dishesTitle[i] == dish){
                    indexDish = i + 1;
                    priceDish = dishesPrice[i];
                }
            }
            let j = 0;
            for(let i = 0; i < addedDish.length; i++){
                j = 0;
                if(addedDish[i] == dish){
                    j++;
                }
            }
            if(j == 0){
                addedDish.push(dish);
            }
        }
        $('.cart p.heading span').text(addedDish.length);
    });

    $('.cart button').click(function(){
        $('.modal-cart').addClass('open');
    });
});