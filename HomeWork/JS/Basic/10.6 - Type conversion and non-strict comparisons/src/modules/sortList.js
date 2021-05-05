import { createNewStudentsList } from "../modules/createNewStudentsList.js";

export const sortList = (students, studentsList, parameter) => {
    const newStudents = students.slice();
    newStudents.sort((prev, next) => {
        if (prev[parameter] < next[parameter]) return -1;
        if (prev[parameter] < next[parameter]) return 1;
    });

    createNewStudentsList(studentsList, newStudents)
}