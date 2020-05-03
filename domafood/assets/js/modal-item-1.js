$(document).ready(() => {
    let items = $('.item');
    for(let i = 0; i < items.length; i++){
        items.eq(i).addClass(`item-${i+1}`);
        items.eq(i).attr('data-itemnumber', i+1);
    }

    $('.item .content .title').on('click', function(){
        let item = $(this).parents('.item');
        let itemIndex = +item.attr('data-itemnumber');
        let itemPrice = item.find('.price').text().replace('р./порция', '');
        let itemPic = item.css('background-image').replace('"', '\'').replace('"', '\'');
        let itemTitle = item.find('.title').text();
        const modalItem = `
            <div class="modal modal-overlay modal-item open">
                <form class="modal-wrapper">
                    <div class="modal-header">
                        <div class="empty"></div>
                        <a href="#" class="modal-close"></a>
                    </div>
                    <div class="modal-content">
                        <div class="item-img" style="background-image: ${itemPic};"></div>
                    </div>
                    <div class="modal-footer">
                        <div class="title">${itemTitle}</div>
                        <div class="price">
                            <span>${itemPrice}</span>
                        </div>
                    </div>
                </form>
            </div>
        `;
        $('#modal-item-wrapper').append(modalItem);

        //Закрыть окно
        $('a.modal-close').click(function(e){
            e.preventDefault();
            $('#modal-item-wrapper').empty();
        });
    });
});