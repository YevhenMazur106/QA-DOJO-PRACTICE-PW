/*
Напиши функцію, яка перевіряє, чи є input масивом.  
Тестові дані:  
console.log(isArray('QA DOJO')); // false  
console.log(isArray([1, 2, 4, 0])); // true    
*/
const array1 = "QA DOJO";
const array2 = [1, 2, 4, 0];

// перевірка лашпєтським методом використовуючи блок if
const isArray = (value) => {
  if (typeof value === "object") {
    return true;
  } else {
    return false;
  }
};
console.log(isArray(array1));
console.log(isArray(array2));
