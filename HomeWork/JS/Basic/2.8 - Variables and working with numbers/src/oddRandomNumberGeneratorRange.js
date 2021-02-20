let numberN = 2;
let numberM = 5;

let min = Math.min(numberN, numberM);
let max = Math.max(numberN, numberM);

if (min % 2 === 0) {
    min++;
}

let maxmin = max - min;

let result = Math.floor(Math.random() * (maxmin / 2 + 1)) * 2 + min

console.log("\n" + result);
console.log("Сравнение чисел: " + Math.min(numberN, numberM) + " < " + Math.max(numberN, numberM));
console.log("_______________________________________________________\n");