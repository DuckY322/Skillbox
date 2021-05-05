export const createFilterMenu = (handlers, parameters) => {
    const inputGroup = document.createElement(`div`);
    inputGroup.classList.add(`input-group`, `mb-3`);

    const inputGroupPrepend = document.createElement(`div`);
    inputGroupPrepend.classList.add(`input-group-prepend`);

    const inputGroupText = document.createElement(`span`);
    inputGroupText.classList.add(`input-group-text`);
    inputGroupText.id = `inputGroup-sizing-default`;
    inputGroupText.textContent = parameters.title;

    const input = document.createElement(`input`);
    input.type = `text`;
    input.classList.add(`form-control`);
    input.setAttribute(`aria-label`, `Sizing example input`);
    input.setAttribute(`aria-describedby`, `inputGroup-sizing-default`);
    input.oninput = function () {
        handlers.listFiltering(input.value, parameters.value);
    }

    inputGroupPrepend.append(inputGroupText);

    inputGroup.append(inputGroupPrepend);
    inputGroup.append(input);

    return inputGroup;
};