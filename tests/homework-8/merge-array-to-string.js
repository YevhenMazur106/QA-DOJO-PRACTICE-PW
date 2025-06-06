/*
Об’єднання елементів масиву  
✏️ Напиши програму, що об'єднує елементи масиву у строку.   (гугліть як це зробити)
Приклад:  
myColor = ["Red", "Green", "White", "Black"];  
// "Red,Green,White,Black"  
// "Red+Green+White+Black"
*/

const myColor = ["Red", "Green", "White", "Black"];

//для об'єднання елментів масиву в стрінгу використовуємо метод join()
const mergeArrayToString = (array) => {
  return array.join();
};

console.log(mergeArrayToString(myColor));
console.log(myColor);
