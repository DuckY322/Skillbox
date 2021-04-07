document.addEventListener(`DOMContentLoaded`, function () {
    const input = document.querySelector(`.input`);
    const button = document.querySelector(`.button`);
    const counter = document.querySelector(`.text`);

    let timer;
    let seconds;

    function inputEvent() {
        if (input.value && Number.isInteger(parseInt(input.value))) {
            startTimer();
        } else {
            counter.textContent = `Введите число в поле для ввода!`;
        }
    }

    function startTimer() {
        clearInterval(timer);
        seconds = input.value;
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
        }
    }

    input.addEventListener(`input`, function () {
        inputEvent()
    });

    button.addEventListener(`click`, function () {
        inputEvent()
    });
});