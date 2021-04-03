document.addEventListener(`DOMContentLoaded`, function () {

    let input = document.querySelector(`.input`);
    let button = document.querySelector(`.button`);
    let counter = document.querySelector(`.text`);

    let timer;
    let timerStarted = false;
    let seconds;

    function inputEvent() {
        if (input.value && Number.isInteger(parseInt(input.value))) {
            seconds = input.value;
            startTimer();
        } else {
            alert(`Введите число в поле для ввода!`)
        }
    }

    function startTimer() {
        if (timerStarted === true) {
            clearInterval(timer);
        }
        timerStarted = true;
        counter.textContent = seconds;
        timer = setInterval(() => {
            timerConditions();
        }, 1000);
    }

    function timerConditions() {
        if (seconds > 0) {
            seconds--;
            counter.textContent = seconds;
        }
        if (seconds === 0) {
            clearInterval(timer);
            timerStarted = 0;
        }
    }

    input.addEventListener(`change`, function () {
        inputEvent()
    });

    button.addEventListener(`click`, function () {
        inputEvent()
    });
});