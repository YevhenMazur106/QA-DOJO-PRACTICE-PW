/*
Сортування масиву  
✏️ Напиши програму для сортування чисел у масиві.   (завдання із зірочкою ⭐️)
Приклад:  
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];  
// Вивід: -4,-3,1,2,3,5,6,7,8    
ЦИКЛИ
*/

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

const sortArrayAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};
const sortArrayDescending = (arr) => {
  return arr.sort((a, b) => b - a);
};
console.log(sortArrayAscending(arr1));
console.log(sortArrayDescending(arr1));
