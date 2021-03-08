let count = 42;
let n = -3;
let m = -10;
let arr = [];

let min = Math.min(n, m);
let max = Math.max(n, m);
let maxmin = max - min;


for (let i = 0; i < count; i++) {
  arr.push(Math.round(Math.random() * maxmin + min));
}

console.log(arr);
