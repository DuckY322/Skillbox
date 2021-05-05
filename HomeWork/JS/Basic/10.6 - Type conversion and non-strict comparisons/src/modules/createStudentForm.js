import { disabledFormButton } from "../modules/disabledFormButton.js";

export const createStudentForm = () => {
    const dateNow = new Date();
    const dateNowYear = dateNow.getFullYear();
    const dateNowMonth = dateNow.getMonth() + 1 < 10 ? `0${dateNow.getMonth() + 1}` : dateNow.getMonth() + 1;
    const dateNowDay = dateNow.getDate() < 10 ? `0${dateNow.getDate()}` : dateNow.getDate();

    const form = document.getElementById(`template__form`).content;

    const inputFirstName = form.getElementById(`inputFirstName`);
    const inputSurname = form.getElementById(`inputSurname`);
    const inputMiddleName = form.getElementById(`inputMiddleName`);

    const inputDateOfBirth = form.getElementById(`inputDateOfBirth`);
    inputDateOfBirth.max = `${dateNowYear}-${dateNowMonth}-${dateNowDay}`;

    const inputYearOfBeginningOfTraining = form.getElementById(`inputYearOfBeginningOfTraining`);
    inputYearOfBeginningOfTraining.max = dateNowYear;

    const inputFaculty = form.getElementById(`inputFaculty`);

    const button = form.querySelector(`button`);
    button.type = `submit`;

    const inputs = form.querySelectorAll(`.form-control`);

    inputs.forEach(item => {
        item.oninput = function () {
            disabledFormButton(inputs, button);
        }
    });

    return {
        form,
        inputFirstName,
        inputSurname,
        inputMiddleName,
        inputDateOfBirth,
        inputYearOfBeginningOfTraining,
        inputFaculty,
        button,
    };
};