const input = document.createElement(`input`);
const subTitle = document.createElement(`h2`);

let timer;

function changeText() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        subTitle.textContent = input.value;
    }, 300);
}

input.addEventListener(`input`, function () {
    changeText();
});

document.addEventListener(`DOMContentLoaded`, () => {
    document.body.append(input);
    document.body.append(subTitle);
});