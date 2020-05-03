$(document).ready(() => {
    let items = $('.item');
    for(let i = 0; i < items.length; i++){
        items.eq(i).addClass(`item-${i+1}`);
        items.eq(i).attr('data-itemnumber', i+1);
    }

    $('.item').click(function(){
        let itemsTitle = $('.item .title');
        let itemsPrice = $('.item .price');
        let itemsPic = $('.item');
        let itemStartIndex = $(this).attr('data-itemnumber');
        console.log(itemStartIndex);
        for(let i = 0; i < itemsPrice.length; i++){
            itemsPrice[i] = +itemsPrice.eq(i).text().replace('р./порция', '');
        }
        for(let i = 0; i < itemsTitle.length; i++){
            itemsTitle[i] = itemsTitle.eq(i).text();
        }
        for(let i = 0; i < itemsPic.length; i++){
            itemsPic[i] = itemsPic.eq(i).css('background-image');
        }
        const modalItem = `
            <div class="modal modal-overlay modal-item open">
                <form class="modal-wrapper">
                    <div class="modal-header">
                        <div class="empty"></div>
                        <a href="#" class="modal-close"></a>
                    </div>
                    <div class="modal-content">
                        <div class="prev"></div>
                        <div class="item-img" style="background-image: ${itemsPic[itemStartIndex]};"></div>
                        <div class="next"></div>
                    </div>
                    <div class="modal-footer">
                        <div class="title">${itemsTitle[itemStartIndex]}</div>
                        <input type="submit" class="btn-orange" value="Отправить заявку"></input>
                    </div>
                </form>
            </div>
        `;
        $('#modal-item-wrapper').append(modalItem);


        $('a.modal-close').click(function(e){
            e.preventDefault();
            $('#modal-item-wrapper').empty();
        });
    });
});