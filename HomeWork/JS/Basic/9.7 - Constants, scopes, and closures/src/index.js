document.addEventListener(`DOMContentLoaded`, function () {

    const body = document.body;

    const menu = document.querySelector(`.section-menu`);
    const NickName = document.getElementById(`input-nickName`);
    const cardCountVertical = document.getElementById(`input-cardCountVert`);
    const cardCountHorizont = document.getElementById(`input-cardCountHor`);
    const btnStartGame = document.querySelector(`.section-menu__btn`);

    const game = document.querySelector(`.section-game`);
    const gameTitle = document.querySelector(`.section-game__title`);
    const gameTime = document.querySelector(`.section-game__time`);
    const gameCardsLeft = document.querySelector(`.section-game__cards-left`);
    const gameCardField = document.querySelector(`.section-game__card-field`);

    let timer;
    let timeLeft = 60; //sec
    let foundСards = 0;
    let numberCardPairs;
    let cardsCount;
    let cards = [];

    function checkingSettings() {
        if (NickName.value) {
            if ((parseInt(cardCountVertical.value) && parseInt(cardCountVertical.value) % 2 === 0 && parseInt(cardCountVertical.value) >= 2 && parseInt(cardCountVertical.value) <= 10) &&
                (parseInt(cardCountHorizont.value) && parseInt(cardCountHorizont.value) % 2 === 0 && parseInt(cardCountHorizont.value) >= 2 && parseInt(cardCountHorizont.value) <= 10)) {

                startGame();

            } else {
                alert(`Укажите корректное количество карточек`);
            }
        } else {
            alert(`Введите, пожалуйста, никнейм`);
        }
    };

    function startGame() {
        menu.classList.toggle(`off`);
        game.classList.toggle(`off`);

        cardsCount = parseInt(cardCountVertical.value * cardCountHorizont.value);
        numberCardPairs = cardsCount / 2;

        gameTitle.textContent = `Удачи, ${NickName.value}!`;
        gameTime.textContent = `Оставшееся время: ${timeLeft / 60 < 10 && timeLeft / 60 >= 1 ? `0${Math.floor(timeLeft / 60)}` : `00`}:${timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}`;

        timer = setInterval(() => {
            timeLeft--;
            let minLeft;
            let secLeft;

            if (timeLeft / 60 < 10 && timeLeft / 60 >= 1) {
                minLeft = `0${Math.floor(timeLeft / 60)}`
            } else if (timeLeft / 60 < 10 && timeLeft / 60 < 1) {
                minLeft = `00`
            } else {
                minLeft = Math.floor(timeLeft / 60)
            }

            if (timeLeft % 60 < 10) {
                secLeft = `0${timeLeft % 60}`
            } else {
                secLeft = timeLeft % 60
            }

            gameTime.textContent = `Оставшееся время: ${minLeft}:${secLeft}`;

            if (timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);

        gameCardsLeft.textContent = `Пар карточек найдено: ${foundСards}/${numberCardPairs}`;


        for (let i = 0; i < cardsCount; i++) {

            let card = document.createElement(`div`);
            card.classList.add(`section-game__card`)

            let cardInner = document.createElement(`div`);
            cardInner.classList.add(`section-game__card_inner`);

            let cardInnerBack = document.createElement(`div`);
            cardInnerBack.classList.add(`section-game__card_inner_back`);
            
            card.append(cardInner);
            card.append(cardInnerBack);

            card.style.width = 100 / parseInt(cardCountHorizont.value) + `%`;
            card.style.height = 100 / parseInt(cardCountVertical.value) + `%`;

            card.addEventListener(`click`, function() {
                card.classList.toggle(`section-game__card_active`);
            });

            gameCardField.append(card);

            cards.push({
                cardNumber: i + 1
            });
        }
    };

    btnStartGame.addEventListener(`click`, function () {
        checkingSettings();
    });


});