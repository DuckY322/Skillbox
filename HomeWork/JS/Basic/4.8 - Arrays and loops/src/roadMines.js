let roadMines = [true, false, false, false, false, false, false, false, false, false];
let position = 0;
let life = 2;

do {
  console.log(`Танк переместился на ${position + 1}-ую позицию`);
  if (roadMines[position]) {
    if (life > 1) {
      console.log(`Танк поврежден (${life - 1} жизней)`);
    } else {
      console.log(`Танк уничтожен (${life - 1} жизней)`);
    }
    life--;
  }
  position++;
} while (life > 0 && position < roadMines.length);
