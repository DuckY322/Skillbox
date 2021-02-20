let a = 13.123456789;
let b = 2.123;
let n = 5;

let aFractionalPart = Math.trunc(((a - Math.floor(a)) * Math.pow(10, n)));
let bFractionalPart = Math.trunc(((b - Math.floor(b)) * Math.pow(10, n)));

console.log("\nДробные части ( " + n + " знаков) чисел a(" + a + ") и b(" + b + "): " + aFractionalPart + " " + bFractionalPart);
console.log(aFractionalPart + " > " + bFractionalPart + " = " + (aFractionalPart > bFractionalPart));
console.log(aFractionalPart + " < " + bFractionalPart + " = " + (aFractionalPart < bFractionalPart));
console.log(aFractionalPart + " >= " + bFractionalPart + " = " + (aFractionalPart >= bFractionalPart));
console.log(aFractionalPart + " <= " + bFractionalPart + " = " + (aFractionalPart <= bFractionalPart));
console.log(aFractionalPart + " === " + bFractionalPart + " = " + (aFractionalPart === bFractionalPart));
console.log(aFractionalPart + " != " + bFractionalPart + " = " + (aFractionalPart != bFractionalPart));
console.log("_______________________________________________________\n");