document.addEventListener(`DOMContentLoaded`, function () {
    let body = document.body;
    let container = document.createElement(`div`);
    let input = document.createElement(`input`);
    let subTitle = document.createElement(`h2`);

    container.classList.add(`container`);
    input.classList.add(`input`);
    subTitle.classList.add(`text`);

    container.append(input);
    container.append(subTitle);

    body.append(container);

    let typingStarted = false;
    let timer;

    function startTimer() {
        if (typingStarted === true) {
            clearTimeout(timer);
        }
        typingStarted = true;
        timer = setTimeout(() => {
            changeText(subTitle, input.value);
        }, 300);
    }

    function changeText(element, text) {
        element.textContent = text;
    };

    input.addEventListener(`keydown`, function () {
        startTimer();
    });
});