const myStorage = window.localStorage;
const dateFromStorage = JSON.parse(myStorage.getItem('table'));
const students = dateFromStorage !== null ? dateFromStorage : [];
const filteredBy = [
    {
        FullName: null,
    },
    {
        Faculty: null,
    },
    {
        dateOfBirth: null,
    },
    {
        YearOfBeginningOfTraining: null,
    },
];

function calculatingTime(date) {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

function createAppTitle(title) {
    const appTile = document.createElement(`h2`);
    appTile.innerHTML = title;
    return appTile;
};

function createSortMenu() {
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

    dropDown.append(btnDropDownToggle);
    dropDown.append(dropdownMenu);

    return {
        dropDown,
        dropdownMenu
    };
}

function createSortMenuItem(handlers, parameters) {
    const item = document.createElement(`a`);
    item.classList.add(`dropdown-item`);
    item.href = `#`;
    item.textContent = parameters.title;

    item.addEventListener(`click`, handlers[parameters.sortBy]);

    return item;
}

function createFilterMenu(handlers, parameters) {

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
}

function sortList(oldList, parameter) {
    students.sort((prev, next) => {
        if (prev[parameter] < next[parameter]) return -1;
        if (prev[parameter] < next[parameter]) return 1;
    });

    createNewStudentsList(oldList, students)
}

function createNewStudentsList(oldList, newStudentList) {
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

    const inputs = [];

    const form = document.createElement(`form`);
    form.classList.add(`input-group`, `mb-5`);

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

    const buttonWrapper = document.createElement(`div`);
    buttonWrapper.classList.add(`input-group-append`, `mr-3`);

    const button = document.createElement(`button`);
    button.setAttribute(`disabled`, `disabled`);
    button.classList.add(`btn`, `btn-primary`);
    button.textContent = `Добавить`;

    form.append(inputFirstName);
    inputs.push(inputFirstName);
    form.append(inputSurname);
    inputs.push(inputSurname);
    form.append(inputMiddleName);
    inputs.push(inputMiddleName);
    form.append(inputdateOfBirth);
    inputs.push(inputdateOfBirth);
    form.append(inputYearOfBeginningOfTraining);
    inputs.push(inputYearOfBeginningOfTraining);
    form.append(inputFaculty);
    inputs.push(inputFaculty);

    buttonWrapper.append(button);

    form.append(buttonWrapper);

    return {
        form,
        inputs,
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

    studentName.textContent = `ФИО: ${studentInfo.FullName}`;
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
                sortList(studentsList, `FullName`);
            },
            sortByFaculty() {
                sortList(studentsList, `Faculty`);
            },
            sortByAge() {
                sortList(studentsList, `dateOfBirth`);
            },
            sortByYearOfBeg() {
                sortList(studentsList, `YearOfBeginningOfTraining`);
            }
        },
        {
            listFiltering(text, datafilteredBy) {
                if (text !== '') {
                    const index = filteredBy.findIndex(item => Object.keys(item)[0] === datafilteredBy);
                    filteredBy[index][datafilteredBy] = text;
                } else {
                    const index = filteredBy.findIndex(item => Object.keys(item)[0] === datafilteredBy);
                    filteredBy[index][datafilteredBy] = null;
                }

                let newStudentsList = students.filter(student => {
                    let result = false;
                    let filterParametersCount = 0;
                    let numberOfFiltersPassed = 0;

                    filteredBy.forEach(item => {
                        const key = Object.keys(item)[0];
                        if (item[key]) {
                            filterParametersCount++;
                        }
                    });

                    filteredBy.forEach(item => {
                        const key = Object.keys(item)[0];
                        if (item[key]) {
                            if (student[key].includes(item[key])) {
                                numberOfFiltersPassed++;
                                if (filterParametersCount === numberOfFiltersPassed) {
                                    result = true;
                                    return;
                                }
                            }
                        }
                    });

                    return result;
                });

                createNewStudentsList(studentsList, newStudentsList.length > 0 ? newStudentsList : students);
            }
        }
    ]
    const filteredParameters = [
        {
            title: `По имени`,
            value: `FullName`,
            sortBy: `sortByName`,
        },
        {
            title: `По факультету`,
            value: `Faculty`,
            sortBy: `sortByFaculty`,
        },
        {
            title: `По году рождения`,
            value: `dateOfBirth`,
            sortBy: `sortByAge`,
        },
        {
            title: `По году начала обучения`,
            value: `YearOfBeginningOfTraining`,
            sortBy: `sortByYearOfBeg`,
        },
    ];
    const appTitleAdd = createAppTitle(`Добавить студента`);
    const appTitleList = createAppTitle(`Список студентов`);
    const studentCreateForm = createStudentCreateForm();
    const sortMenu = createSortMenu();
    const studentsList = createStudentsList();

    container.append(appTitleAdd);
    container.append(studentCreateForm.form);
    container.append(appTitleList);

    container.append(sortMenu.dropDown);

    filteredParameters.forEach(el => {
        sortMenu.dropdownMenu.append(createSortMenuItem(handlers[0], el));
        container.append(createFilterMenu(handlers[1], el));
    });

    container.append(studentsList);

    students.forEach(student => {
        const studentElement = createStudent(student);
        studentsList.append(studentElement);
    });

    studentCreateForm.inputs.forEach(item => {
        item.oninput = function () {
            disabledFormButton(studentCreateForm.inputs, studentCreateForm.button);
        }
    });

    studentCreateForm.form.addEventListener(`submit`, async e => {
        e.preventDefault();

        const studentObj = {
            FullName: `${studentCreateForm.inputSurname.value.trim()} ${studentCreateForm.inputFirstName.value.trim()} ${studentCreateForm.inputMiddleName.value.trim()}`,
            dateOfBirth: studentCreateForm.inputdateOfBirth.value.trim(),
            YearOfBeginningOfTraining: studentCreateForm.inputYearOfBeginningOfTraining.value.trim(),
            Faculty: studentCreateForm.inputFaculty.value.trim(),
        };

        const studentElement = createStudent(studentObj);
        studentsList.append(studentElement);

        const tempStorage = JSON.parse(myStorage.getItem('table'));
        tempStorage.push(studentObj);
        myStorage.setItem('table', JSON.stringify(tempStorage))

        studentCreateForm.inputs.forEach(item => {
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