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
    const filteredBy = [];
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
    const handlers = [
        {
            sortByName() {
                sortList(students, studentsList, filteredParameters[0].value);
            },
            sortByFaculty() {
                sortList(students, studentsList, filteredParameters[1].value);
            },
            sortByAge() {
                sortList(students, studentsList, filteredParameters[2].value);
            },
            sortByYearOfBeg() {
                sortList(students, studentsList, filteredParameters[3].value);
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
    ];
    const sortMenu = createSortMenu();
    const studentsList = createStudentsList();
    const studentCreateForm = createStudentForm(studentsList, students, myStorage);

    container.append(studentCreateForm.formTitle);
    container.append(studentCreateForm.form);
    container.append(sortMenu.dropDown);

    filteredParameters.forEach(el => {
        sortMenu.dropDownMenu.append(createSortMenuItem(handlers[0], el));
        container.append(createFilterMenu(handlers[1], el));
        filteredBy.push({ [el.value]: null });
    });

    container.append(studentsList);

    students.forEach(student => {
        const studentElement = createStudent(student);
        studentsList.append(studentElement);
    });
}