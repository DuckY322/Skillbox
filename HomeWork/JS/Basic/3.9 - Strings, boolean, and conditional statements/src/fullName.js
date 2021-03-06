let oldName = "Виталий";
let oldSurname = "еРмИшЕв";

let firstSymbolNewName = "";
let firstSymbolNewSurname = "";

let bodyNewName = "";
let bodyNewSurname = "";

firstSymbolNewName = oldName.substr(0, 1).toUpperCase();
bodyNewName = oldName.substr(1).toLowerCase();
firstSymbolNewSurname = oldSurname.substr(0, 1).toUpperCase();
bodyNewSurname = oldSurname.substr(1).toLowerCase();

console.log(`${firstSymbolNewName}${bodyNewName} ${firstSymbolNewSurname}${bodyNewSurname}`);

const result =
  oldName !== firstSymbolNewName+bodyNewName
    ? console.log(`Имя было преобразовано`)
    : oldSurname !== firstSymbolNewSurname+bodyNewSurname
    ? console.log(`Имя было преобразовано`)
    : console.log("Имя осталось без изменений");
