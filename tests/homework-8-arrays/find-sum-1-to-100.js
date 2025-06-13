/*
Сума чисел від 1 до 100
✏️ Напиши програму, яка знайде суму чисел від 1 до 100.
*/

const array1 = [];

for (let i = 1; i <= 100; i++) {
  array1.push(i);
}
console.log(array1);

const sumNumbers = (arr) => {
  let sum = 0; // оголошуємо змінну в якій будемо зберігати проміжну суму чисел

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum;
};
console.log(sumNumbers(array1))






