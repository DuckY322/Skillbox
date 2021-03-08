let month = [];

let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let firstDayWeek = 1;

for (let i = 0; i < 31; i++) {
  month.push(i + 1);
  console.log(`${month[i]} января, ${week[(i + firstDayWeek) % 7]}`);
}
