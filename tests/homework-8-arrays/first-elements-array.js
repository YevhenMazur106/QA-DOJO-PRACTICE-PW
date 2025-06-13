/*
Напиши функцію для отримання перших n елементів масиву.  
Тестові дані:  
console.log(first([7, 9, 0, -2])); // 7  
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]    
*/

const array = [7, 9, 0, -2];

// для отримання отримання перших n елементів масиву використовуємо метод slice()
const getFirstElements = (arr, n = 1) => {
  return arr.slice(0, n);
};

console.log(getFirstElements(array));
console.log(getFirstElements(array, 3));
