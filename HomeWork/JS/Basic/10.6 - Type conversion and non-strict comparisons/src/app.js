import { sortList } from "../src/modules/sortList.js";
import { createNewStudentsList } from "../src/modules/createNewStudentsList.js";
import { createStudentForm } from "../src/modules/createStudentForm.js";
import { createSortMenu } from "../src/modules/createSortMenu.js";
import { createStudentsList } from "../src/modules/createStudentsList.js";
import { createSortMenuItem } from "../src/modules/createSortMenuItem.js";
import { createFilterMenu } from "../src/modules/createFilterMenu.js";
import { createStudent } from "../src/modules/createStudent.js";

export const app = () => {
    const container = document.getElementById(`student-panel`);
    const myStorage = window.localStorage;
    const dataFromStorage = JSON.parse(myStorage.getItem('table'));
    const students = dataFromStorage !== null ? dataFromStorage : [];
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
    const handlers = [
        {
            sortByName() {
                sortList(students, studentsList, `FullName`);
            },
            sortByFaculty() {
                sortList(students, studentsList, `Faculty`);
            },
            sortByAge() {
                sortList(students, studentsList, `dateOfBirth`);
            },
            sortByYearOfBeg() {
                sortList(students, studentsList, `YearOfBeginningOfTraining`);
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
    const studentCreateForm = createStudentForm();
    const sortMenu = createSortMenu();
    const studentsList = createStudentsList();

    container.append(studentCreateForm.form);
    container.append(sortMenu.dropDown);

    filteredParameters.forEach(el => {
        sortMenu.dropDownMenu.append(createSortMenuItem(handlers[0], el));
        container.append(createFilterMenu(handlers[1], el));
    });

    container.append(studentsList);

    students.forEach(student => {
        const studentElement = createStudent(student);
        studentsList.append(studentElement);
    });

    studentCreateForm.button.addEventListener(`click`, function (e) {
        e.preventDefault();
        const studentObj = {
            FullName: `${studentCreateForm.inputSurname.value.trim()} ${studentCreateForm.inputFirstName.value.trim()} ${studentCreateForm.inputMiddleName.value.trim()}`,
            dateOfBirth: studentCreateForm.inputDateOfBirth.value.trim(),
            YearOfBeginningOfTraining: studentCreateForm.inputYearOfBeginningOfTraining.value.trim(),
            Faculty: studentCreateForm.inputFaculty.value.trim(),
        };

        const studentElement = createStudent(studentObj);
        studentsList.append(studentElement);

        students.push(studentObj);
        myStorage.setItem('table', JSON.stringify(students))

        studentCreateForm.form.reset;

        studentCreateForm.button.setAttribute(`disabled`, `disabled`);
    });
}