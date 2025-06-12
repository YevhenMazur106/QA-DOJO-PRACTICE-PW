/*
 Використай цикл, щоб створити масив з числами у зворотному порядку від 241 до 1. 
*/

const arrayReverse = [];

// метод unshift()
for (let i = 1; i <= 241; i++) {
  arrayReverse.unshift(i);
}
console.log(arrayReverse);
