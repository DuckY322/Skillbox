import { calculatingTime } from "../modules/calculatingTime.js";

export const createStudent = (studentInfo) => {

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

    const dateOfBirth = new Date(studentInfo.dateOfBirth);
    const yearOfBirth = dateOfBirth.getFullYear();
    const monthOfBirth = dateOfBirth.getMonth() + 1 < 10 ? `0${dateOfBirth.getMonth() + 1}` : dateOfBirth.getMonth() + 1;
    const dayOfBirth = dateOfBirth.getDate() < 10 ? `0${dateOfBirth.getDate()}` : dateOfBirth.getDate();

    const dateOfBirthText = `${yearOfBirth}.${monthOfBirth}.${dayOfBirth}`;
    const age = calculatingTime(studentInfo.dateOfBirth);
    const course = calculatingTime(`${studentInfo.YearOfBeginningOfTraining}-09-01`) + 1;

    studentName.textContent = `ФИО: ${studentInfo.FullName}`;
    studentdateOfBirth.textContent = `Дата рождения: ${dateOfBirthText} ( Возраст: ${age} )`;
    studentYearOfBeginningOfTraining.textContent = `Годы обучения: ${studentInfo.YearOfBeginningOfTraining}-${Number(studentInfo.YearOfBeginningOfTraining) + 4} ${course <= 4 && course >= 1 ? ` ( ${course} курс )` : `( Закончил(а) )`}`;
    studentFaculty.textContent = `Факультет: ${studentInfo.Faculty}`;

    item.append(studentName);
    item.append(studentdateOfBirth);
    item.append(studentYearOfBeginningOfTraining);
    item.append(studentFaculty);

    return item;
}