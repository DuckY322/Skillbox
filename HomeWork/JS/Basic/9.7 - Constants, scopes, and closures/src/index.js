document.addEventListener(`DOMContentLoaded`, function () {

    const menu = document.querySelector(`.section-menu`);
    const NickName = document.getElementById(`input-nickName`);
    const cardCountVertical = document.getElementById(`input-cardCountVert`);
    const cardCountHorizont = document.getElementById(`input-cardCountHor`);
    const btnStartGame = document.querySelector(`.section-menu__btn`);
    let cards = [];

    function startGame() {
        if (NickName.value) {
            if ((parseInt(cardCountVertical.value) && parseInt(cardCountVertical.value) % 2 === 0 && parseInt(cardCountVertical.value) >= 2 && parseInt(cardCountVertical.value) <= 10) &&
                (parseInt(cardCountHorizont.value) && parseInt(cardCountHorizont.value) % 2 === 0 && parseInt(cardCountHorizont.value) >= 2 && parseInt(cardCountHorizont.value) <= 10)) {
                menu.classList.toggle(`off`);
                for (let i = 0; i < cardCountVertical + cardCountHorizont; i++) {
                    cards.push({
                        // cardNumber: 
                    });
                }
            } else {
                alert(`Укажите корректное количество карточек`);
            }
        } else {
            alert(`Введите, пожалуйста, никнейм`);
        }
    };

    btnStartGame.addEventListener(`click`, function () {
        startGame();
    });

    NickName.addEventListener(`change`, function () {
        startGame();
    });

    cardCountVertical.addEventListener(`change`, function () {
        startGame();
    });

    cardCountHorizont.addEventListener(`change`, function () {
        startGame();
    });


});