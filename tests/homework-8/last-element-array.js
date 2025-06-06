/*
Напиши функцію для отримання останніх n елементів масиву.  
Тестові дані:  
console.log(last([7, 9, 0, -2])); // -2  
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]   
*/

const array = [7, 9, 0, -2];

// для отримання отримання останніх n елементів масиву використовуємо метод slice()
const last = (arr, n = 1) => {
  return arr.slice(-n);
};

console.log(last(array));
console.log(last(array, 3));
