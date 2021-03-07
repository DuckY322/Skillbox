let oldName = "Виталий";
let oldSurname = "еРмИшЕв";

let firstSymbolNewName = "";
let firstSymbolNewSurname = "";

let bodyNewName = "";
let bodyNewSurname = "";

let newName = "";
let newSurname = "";

firstSymbolNewName = oldName.substr(0, 1).toUpperCase();
bodyNewName = oldName.substr(1).toLowerCase();
firstSymbolNewSurname = oldSurname.substr(0, 1).toUpperCase();
bodyNewSurname = oldSurname.substr(1).toLowerCase();

newName = firstSymbolNewName + bodyNewName;
newSurname = firstSymbolNewSurname + bodyNewSurname;

console.log(`${newName} ${newSurname}`);

oldName !== newName
  ? console.log(`Имя было преобразовано`)
  : console.log("Имя осталось без изменений");

oldSurname !== newSurname
  ? console.log(`Фамилия была преобразована`)
  : console.log("Фамилия осталась без изменений");
