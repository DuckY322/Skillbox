import Swiper from '../node_modules/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__button_burger').addEventListener('click', function() {
        document.querySelector('.header__list').classList.toggle('header__list_active');
    })

    document.querySelectorAll('.section-questions__button').forEach(el => {
        el.addEventListener('click', function() {
            this.classList.toggle('section-questions__button_active');
            let answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
})