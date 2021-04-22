document.addEventListener(`DOMContentLoaded`, function () {
    const input = document.querySelector(`.input`);
    const button = document.querySelector(`.button`);
    const counter = document.querySelector(`.text`);

    let timer;
    let seconds;

    function onTimerFieldInput() {
        if (parseInt(input.value)) {
            timerStarting();
        } else {
            counter.textContent = `Введите число в поле для ввода!`;
        }
    }

    function timerStarting() {
        clearInterval(timer);
        seconds = input.value;
        counter.textContent = seconds;
        timer = setInterval(() => {
            timerAction();
        }, 1000);
    }

    function timerAction() {
        if (seconds > 0) {
            seconds--;
            counter.textContent = seconds;
        }
        if (seconds === 0) {
            clearInterval(timer);
        }
    }

    input.addEventListener(`change`, onTimerFieldInput);

    button.addEventListener(`click`, onTimerFieldInput);
});