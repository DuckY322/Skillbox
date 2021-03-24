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

    let openQuestion;

    document.querySelector('.header__button_burger').addEventListener('click', function() {
        document.querySelector('.header__list').classList.toggle('header__list_active');
    })

    document.querySelectorAll('.section-questions__item').forEach(el => {
        el.addEventListener('click', function() {
            let question = this.querySelector('.section-questions__button');

            document.querySelectorAll('.section-questions__button').forEach(item => {
                item.classList.remove('section-questions__button_active');
                item.nextElementSibling.style.maxHeight = null;
            });

            if (this === openQuestion) {
                question.classList.remove('section-questions__button_active');
                question.nextElementSibling.style.maxHeight = null;
                openQuestion = null;
            } else {
                openQuestion = this;
                question.classList.add('section-questions__button_active');
                let answer = question.nextElementSibling;
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            }
        });
    });
});