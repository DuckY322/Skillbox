let numberN = -2;
let numberM = -9;

let min = Math.min(numberN, numberM);
let max = Math.max(numberN, numberM);


let maxmin = max - min;

let result = Math.floor((Math.random() * maxmin + min) / 2) * 2 + 1;

console.log("\n" + result);
console.log("Сравнение чисел: " + Math.min(numberN, numberM) + " < " + Math.max(numberN, numberM));
console.log("_______________________________________________________\n");