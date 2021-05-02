let myStorage = window.localStorage;
let students = [];
let filteredBy;

function calculatingTime(date) {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

function createAppTitle(title) {
    const appTile = document.createElement(`h2`);
    appTile.innerHTML = title;
    return appTile;
};

function createSortMenu(handlers) {
    const dropDown = document.createElement(`div`);
    dropDown.classList.add(`dropdown`, `mb-3`);

    const btnDropDownToggle = document.createElement(`a`);
    btnDropDownToggle.classList.add(`btn`, `btn-secondary`, `dropdown-toggle`);
    btnDropDownToggle.type = `button`;
    btnDropDownToggle.id = `dropdownMenuButton`;
    btnDropDownToggle.setAttribute(`data-toggle`, `dropdown`);
    btnDropDownToggle.setAttribute(`aria-haspopup`, `true`);
    btnDropDownToggle.setAttribute(`aria-expanded`, `false`);
    btnDropDownToggle.textContent = `Сортировать`

    const dropdownMenu = document.createElement(`div`);
    dropdownMenu.classList.add(`dropdown-menu`);
    dropdownMenu.setAttribute(`aria-labelledby`, `dropdownMenuButton`);

    const SortByName = document.createElement(`a`);
    SortByName.classList.add(`dropdown-item`);
    SortByName.href = `#`;
    SortByName.textContent = `По имени`;

    const SortByFaculty = document.createElement(`a`);
    SortByFaculty.classList.add(`dropdown-item`);
    SortByFaculty.href = `#`;
    SortByFaculty.textContent = `По факультету`;

    const SortByAge = document.createElement(`a`);
    SortByAge.classList.add(`dropdown-item`);
    SortByAge.href = `#`;
    SortByAge.textContent = `По возрасту`;

    const SortByYearOfBeg = document.createElement(`a`);
    SortByYearOfBeg.classList.add(`dropdown-item`);
    SortByYearOfBeg.href = `#`;
    SortByYearOfBeg.textContent = `По году начала обучения`;

    SortByName.addEventListener(`click`, handlers.sortByName)
    SortByFaculty.addEventListener(`click`, handlers.sortByFaculty)
    SortByAge.addEventListener(`click`, handlers.sortByAge)
    SortByYearOfBeg.addEventListener(`click`, handlers.sortByYearOfBeg)

    dropdownMenu.append(SortByName);
    dropdownMenu.append(SortByFaculty);
    dropdownMenu.append(SortByAge);
    dropdownMenu.append(SortByYearOfBeg);

    dropDown.append(btnDropDownToggle);
    dropDown.append(dropdownMenu);

    return dropDown;
}

function createFilterMenu(handlers) {
    const inputGroup = document.createElement(`div`);
    inputGroup.classList.add(`input-group`, `mb-3`);

    const inputPrepend = document.createElement(`div`);
    inputPrepend.classList.add(`input-group-prepend`);

    const input = document.createElement(`input`);
    input.type = `text`;
    input.classList.add(`form-control`);
    input.setAttribute(`aria-label`, `Text input with dropdown button`)
    input.oninput = function () {
        handlers.listFiltering(input.value, filteredBy);
    }

    const btnDropDownToggle = document.createElement(`button`);
    btnDropDownToggle.classList.add(`btn`, `btn-outline-secondary`, `dropdown-toggle`);
    btnDropDownToggle.type = `button`;
    btnDropDownToggle.setAttribute(`data-toggle`, `dropdown`);
    btnDropDownToggle.setAttribute(`aria-haspopup`, `true`);
    btnDropDownToggle.setAttribute(`aria-expanded`, `false`);
    btnDropDownToggle.textContent = `Фильтровать`;

    const dropdownMenu = document.createElement(`div`);
    dropdownMenu.classList.add(`dropdown-menu`);

    const FilterByName = document.createElement(`a`);
    FilterByName.classList.add(`dropdown-item`);
    FilterByName.href = `#`;
    FilterByName.textContent = `По имени`;

    const FilterByFaculty = document.createElement(`a`);
    FilterByFaculty.classList.add(`dropdown-item`);
    FilterByFaculty.href = `#`;
    FilterByFaculty.textContent = `По факультету`;

    const FilterByAge = document.createElement(`a`);
    FilterByAge.classList.add(`dropdown-item`);
    FilterByAge.href = `#`;
    FilterByAge.textContent = `По возрасту`;

    const FilterByYearOfBeg = document.createElement(`a`);
    FilterByYearOfBeg.classList.add(`dropdown-item`);
    FilterByYearOfBeg.href = `#`;
    FilterByYearOfBeg.textContent = `По году начала обучения`;

    const separator = document.createElement(`div`);
    separator.setAttribute(`role`, `separator`);
    separator.classList.add(`dropdown-divider`);

    FilterByName.addEventListener(`click`, function () { handlers.filterByName(FilterByName, btnDropDownToggle) })
    FilterByFaculty.addEventListener(`click`, function () { handlers.filterByFaculty(FilterByFaculty, btnDropDownToggle) })
    FilterByAge.addEventListener(`click`, function () { handlers.filterByAge(FilterByAge, btnDropDownToggle) })
    FilterByYearOfBeg.addEventListener(`click`, function () { handlers.filterByYearOfBeg(FilterByYearOfBeg, btnDropDownToggle) })

    dropdownMenu.append(FilterByName);
    dropdownMenu.append(FilterByFaculty);
    dropdownMenu.append(FilterByAge);
    dropdownMenu.append(FilterByYearOfBeg);
    dropdownMenu.append(separator);

    inputPrepend.append(btnDropDownToggle);
    inputPrepend.append(dropdownMenu);

    inputGroup.append(inputPrepend);
    inputGroup.append(input);

    return inputGroup;
}

function createSortList(oldList, parameter) {

    const newStudentList = students.slice();

    newStudentList.sort((prev, next) => {
        if (typeof parameter === `object`) {
            if (`${prev[parameter[0]]} ${prev[parameter[1]]} ${prev[parameter[2]]}` < `${next[parameter[0]]} ${next[parameter[1]]} ${next[parameter[2]]}`) return -1;
            if (`${prev[parameter[0]]} ${prev[parameter[1]]} ${prev[parameter[2]]}` < `${next[parameter[0]]} ${next[parameter[1]]} ${next[parameter[2]]}`) return 1;
        } else {
            if (prev[parameter] < next[parameter]) return -1;
            if (prev[parameter] < next[parameter]) return 1;
        }
    });

    oldList.innerHTML = ``;
    newStudentList.forEach(student => {
        const studentElement = createStudent(student);
        oldList.append(studentElement);
    });
}

function createFilterList(oldList, newStudentList) {
    oldList.innerHTML = ``;
    newStudentList.forEach(student => {
        const studentElement = createStudent(student);
        oldList.append(studentElement);
    });
}

function createStudentCreateForm() {

    const dateNow = new Date();
    const dateNowYear = dateNow.getFullYear();
    const dateNowMonth = dateNow.getMonth();
    const dateNowDay = dateNow.getDate();

    const form = document.createElement(`form`);

    const inputFirstName = document.createElement(`input`);
    const inputSurname = document.createElement(`input`);
    const inputMiddleName = document.createElement(`input`);
    const inputdateOfBirth = document.createElement(`input`);
    const inputYearOfBeginningOfTraining = document.createElement(`input`);
    const inputFaculty = document.createElement(`input`);

    inputFirstName.classList.add(`form-control`, `w-100`, `mb-1`);
    inputFirstName.placeholder = `Введите Имя студента`;

    inputSurname.classList.add(`form-control`, `w-100`, `mb-1`);
    inputSurname.placeholder = `Введите Фамилию студента`;

    inputMiddleName.classList.add(`form-control`, `w-100`, `mb-1`);
    inputMiddleName.placeholder = `Введите Отчество студента`;

    inputdateOfBirth.classList.add(`form-control`, `w-100`, `mb-1`);
    inputdateOfBirth.placeholder = `Введите дату рождения студента`;
    inputdateOfBirth.type = `date`
    inputdateOfBirth.min = `1900-01-01`
    inputdateOfBirth.max = `${dateNowYear}-${dateNowMonth + 1 < 10 ? `0${dateNowMonth + 1}` : dateNowMonth + 1}-${dateNowDay < 10 ? `0${dateNowDay}` : dateNowDay}`;

    inputYearOfBeginningOfTraining.classList.add(`form-control`, `w-100`, `mb-1`);
    inputYearOfBeginningOfTraining.placeholder = `Введите год начала обучения студента`;
    inputYearOfBeginningOfTraining.type = `number`
    inputYearOfBeginningOfTraining.min = 2000;
    inputYearOfBeginningOfTraining.max = dateNowYear;

    inputFaculty.classList.add(`form-control`, `w-100`, `mb-1`);
    inputFaculty.placeholder = `Введите факультет студента`;

    form.append(inputFirstName);
    form.append(inputSurname);
    form.append(inputMiddleName);
    form.append(inputdateOfBirth);
    form.append(inputYearOfBeginningOfTraining);
    form.append(inputFaculty);

    const buttonWrapper = document.createElement(`div`);
    const button = document.createElement(`button`);

    form.classList.add(`input-group`, `mb-5`);
    buttonWrapper.classList.add(`input-group-append`, `mr-3`);
    button.setAttribute(`disabled`, `disabled`);
    button.classList.add(`btn`, `btn-primary`);
    button.textContent = `Добавить`;

    buttonWrapper.append(button);
    form.append(buttonWrapper);

    return {
        form,
        inputFirstName,
        inputSurname,
        inputMiddleName,
        inputdateOfBirth,
        inputYearOfBeginningOfTraining,
        inputFaculty,
        button,
    };
};

function createStudentsList() {
    const list = document.createElement(`ul`);
    list.classList.add(`list-group`);
    return list;
};

function createStudent(studentInfo) {

    const item = document.createElement(`li`);

    const studentName = document.createElement(`p`);
    studentName.classList.add(`w-100`)

    const studentdateOfBirth = document.createElement(`p`);
    studentdateOfBirth.classList.add(`w-100`)

    const studentYearOfBeginningOfTraining = document.createElement(`p`);
    studentYearOfBeginningOfTraining.classList.add(`w-100`)

    const studentFaculty = document.createElement(`p`);
    studentFaculty.classList.add(`w-100`)

    item.classList.add(`list-group-item`, `d-flex`, `flex-column`, `justify-content-between`, `align-items-center`);

    const yearOfBirth = new Date(studentInfo.dateOfBirth).getFullYear();
    const monthOfBirth = new Date(studentInfo.dateOfBirth).getMonth() + 1;
    const dayOfBirth = new Date(studentInfo.dateOfBirth).getDate();

    const dateOfBirth = `${yearOfBirth}.${monthOfBirth < 10 ? `0${monthOfBirth}` : monthOfBirth}.${dayOfBirth < 10 ? `0${dayOfBirth}` : dayOfBirth}`;
    const age = calculatingTime(studentInfo.dateOfBirth);
    const course = calculatingTime(`${studentInfo.YearOfBeginningOfTraining}-09-01`) + 1;

    studentName.textContent = `ФИО: ${studentInfo.Surname} ${studentInfo.FirstName} ${studentInfo.MiddleName}`;
    studentdateOfBirth.textContent = `Дата рождения: ${dateOfBirth} ( Возраст: ${age} )`;
    studentYearOfBeginningOfTraining.textContent = `Годы обучения: ${studentInfo.YearOfBeginningOfTraining}-${Number(studentInfo.YearOfBeginningOfTraining) + 4} ${course <= 4 && course >= 1 ? ` ( ${course} курс )` : `( Закончил(а) )`}`;
    studentFaculty.textContent = `Факультет: ${studentInfo.Faculty}`;

    item.append(studentName);
    item.append(studentdateOfBirth);
    item.append(studentYearOfBeginningOfTraining);
    item.append(studentFaculty);

    return item;
};

function createStudentControlPanelApp(container) {
    const handlers = [
        {
            sortByName() {
                createSortList(studentsList, [`Surname`, `FirstName`, `MiddleName`]);
            },
            sortByFaculty() {
                createSortList(studentsList, `Faculty`);
            },
            sortByAge() {
                createSortList(studentsList, `dateOfBirth`);
            },
            sortByYearOfBeg() {
                createSortList(studentsList, `YearOfBeginningOfTraining`);
            }
        },
        {
            filterByName(thisBtn, mainBtn) {
                filteredBy = [`Surname`, `FirstName`, `MiddleName`];
                mainBtn.textContent = thisBtn.textContent;
            },
            filterByFaculty(thisBtn, mainBtn) {
                filteredBy = `Faculty`;
                mainBtn.textContent = thisBtn.textContent;
            },
            filterByAge(thisBtn, mainBtn) {
                filteredBy = `dateOfBirth`;
                mainBtn.textContent = thisBtn.textContent;
            },
            filterByYearOfBeg(thisBtn, mainBtn) {
                filteredBy = `YearOfBeginningOfTraining`;
                mainBtn.textContent = thisBtn.textContent;
            },
            listFiltering(text, filteredBy) {
                if (filteredBy) {
                    let FilterList;
                    if (typeof filteredBy === `object`) {
                        FilterList = students.filter(item => item[filteredBy[0]].includes(text) || item[filteredBy[1]].includes(text) || item[filteredBy[2]].includes(text));
                    } else {
                        FilterList = students.filter(item => item[filteredBy].includes(text));
                    }

                    createFilterList(studentsList, FilterList);
                }
            }
        }
    ]
    const appTitleAdd = createAppTitle(`Добавить студента`);
    const appTitleList = createAppTitle(`Список студентов`);
    const studentCreateForm = createStudentCreateForm();
    const sortMenu = createSortMenu(handlers[0]);
    const filterMenu = createFilterMenu(handlers[1]);
    const studentsList = createStudentsList();

    container.append(appTitleAdd);
    container.append(studentCreateForm.form);
    container.append(appTitleList);
    container.append(sortMenu);
    container.append(filterMenu);
    container.append(studentsList);

    dateFromStorage = JSON.parse(myStorage.getItem('table'));

    students = dateFromStorage !== null ? dateFromStorage : [];
    students.forEach(student => {
        const studentElement = createStudent(student);
        studentsList.append(studentElement);
    });

    let inputs = [
        studentCreateForm.inputFirstName,
        studentCreateForm.inputSurname,
        studentCreateForm.inputMiddleName,
        studentCreateForm.inputdateOfBirth,
        studentCreateForm.inputYearOfBeginningOfTraining,
        studentCreateForm.inputFaculty,
    ]

    inputs.forEach(item => {
        item.oninput = function () {
            disabledFormButton(inputs, studentCreateForm.button);
        }
    });

    studentCreateForm.form.addEventListener(`submit`, async e => {
        e.preventDefault();

        let studentObj = {
            FirstName: studentCreateForm.inputFirstName.value.trim(),
            Surname: studentCreateForm.inputSurname.value.trim(),
            MiddleName: studentCreateForm.inputMiddleName.value.trim(),
            dateOfBirth: studentCreateForm.inputdateOfBirth.value.trim(),
            YearOfBeginningOfTraining: studentCreateForm.inputYearOfBeginningOfTraining.value.trim(),
            Faculty: studentCreateForm.inputFaculty.value.trim(),
        };

        const studentElement = createStudent(studentObj);
        studentsList.append(studentElement);

        students.push(studentObj);
        myStorage.setItem('table', JSON.stringify(students))

        inputs.forEach(item => {
            item.value = ``;
        });

        studentCreateForm.button.setAttribute(`disabled`, `disabled`);
    });
}

function disabledFormButton(inputs, button) {
    inputs.forEach(item => {
        if (!item.value.trim()) {
            button.setAttribute(`disabled`, `disabled`);
            return;
        }
        button.removeAttribute(`disabled`);
    });
}

document.addEventListener(`DOMContentLoaded`, function () {
    createStudentControlPanelApp(document.getElementById(`student-panel`));
});