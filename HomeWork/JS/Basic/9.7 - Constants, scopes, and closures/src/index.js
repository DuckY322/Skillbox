document.addEventListener(`DOMContentLoaded`, function () {

    const menu = document.querySelector(`.section-menu`);
    let NickName = document.getElementById(`input-nickName`);
    let cardCountVertical = document.getElementById(`input-cardCountVert`);
    let cardCountHorizont = document.getElementById(`input-cardCountHor`);
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

                NickName = NickName.value;
                cardCountVertical = parseInt(cardCountVertical.value);
                cardCountHorizont = parseInt(cardCountHorizont.value);
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

        cardsCount = cardCountVertical * cardCountHorizont;
        numberCardPairs = cardsCount / 2;

        gameTitle.textContent = `Удачи, ${NickName}!`;
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


        for (let i = 1; i <= cardsCount / 2; i++) {
            cards.push({
                cardNumber: i,
                opened: true,
            });
            cards.push({
                cardNumber: i,
                opened: true,
            });

        }

        for (let i = 0; i < cardsCount; i++) {
            let card = document.createElement(`div`);
            card.classList.add(`section-game__card`)

            let cardInner = document.createElement(`div`);
            cardInner.classList.add(`section-game__card_inner`);

            let setCardNumber = false
            while (!setCardNumber) {
                let tempCard = cards[Math.floor(Math.random() * (cards.length - 0) + 0)];
                if (tempCard.opened) {
                    tempCard.opened = false;
                    cardInner.textContent = tempCard.cardNumber;
                    setCardNumber = true;
                }
            }

            let cardInnerBack = document.createElement(`div`);
            cardInnerBack.classList.add(`section-game__card_inner_back`);

            card.append(cardInner);
            card.append(cardInnerBack);

            card.style.width = 100 / cardCountHorizont + `%`;
            card.style.height = 100 / cardCountVertical + `%`;

            card.addEventListener(`click`, function () {
                card.classList.toggle(`section-game__card_active`);
            });

            gameCardField.append(card);
        }

        gameCardField.style.width = cardCountHorizont * 100 + `px`;
        gameCardField.style.height = cardCountVertical * 100 + `px`;
    };

    btnStartGame.addEventListener(`click`, function () {
        checkingSettings();
    });


});