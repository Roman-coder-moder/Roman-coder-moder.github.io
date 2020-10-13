function flip (item, text) {
    item.classList.toggle('flip');
    text.classList.toggle('flip');
}

function resizeScreenChecker() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else {
        if (swiper) {
            swiper.destroy();
        }
    }
}

window.addEventListener('load',function () {
    resizeScreenChecker();
});

window.addEventListener('resize',function () {
    resizeScreenChecker();
});

var btnShowAll = document.querySelector('.show-all-btn');
var textBtnShowAll = btnShowAll.querySelector('.show-all-btn__text');
var brandList = document.querySelector('.brand-list');

btnShowAll.addEventListener('click', function (evt) {
    evt.preventDefault();

    brandList.classList.toggle('brand-list--minimize')

    if (textBtnShowAll.textContent === 'Показать все') {
        textBtnShowAll.textContent = 'Скрыть';
    } else {
        textBtnShowAll.textContent = 'Показать все';
    }
    flip(btnShowAll, textBtnShowAll);
});






