let oldName = "Виталий";
let oldSurname = "еРмИшЕв";

let firstSymbolNewName = "";
let firstSymbolNewSurname = "";

let bodyNewName = "";
let bodyNewSurname = "";

let newName = "";
let newSurname = "";

if (oldName.substr(0, 1) !== oldName.substr(0, 1).toUpperCase()) {
    firstSymbolNewName = oldName.substr(0, 1).toUpperCase();
} else {
    firstSymbolNewName = oldName.substr(0, 1);
}

if (oldName.substr(1) !== oldName.substr(1).toLowerCase()) {
    bodyNewName = oldName.substr(1).toLowerCase();
} else {
    bodyNewName = oldName.substr(1);
}

if (oldSurname.substr(0, 1) !== oldSurname.substr(0, 1).toUpperCase()) {
    firstSymbolNewSurname = oldSurname.substr(0, 1).toUpperCase();
} else {
    firstSymbolNewSurname = oldSurname.substr(0, 1)
}

if (oldSurname.substr(1) !== oldSurname.substr(1).toLowerCase()) {
    bodyNewSurname = oldSurname.substr(1).toLowerCase();
} else {
    bodyNewSurname = oldSurname.substr(1)
}

newName = firstSymbolNewName + bodyNewName;
newSurname = firstSymbolNewSurname + bodyNewSurname;

const result = oldName !== newName ? Output() : oldSurname !== newSurname ? Output() : console.log("Имя осталось без изменений");

function Output() {
    console.log(`Имя ${oldName} ${oldSurname} было преобразовано на ${newName} ${newSurname}`);
}