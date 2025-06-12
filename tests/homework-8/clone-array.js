/*
Напиши функцію для створення копії масиву.  
Тестові дані:  
console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]  
console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]  
*/

const array1 = [1, 2, 4, 0];

function array0(arr){
  return [].concat(arr)
}
console.log(array0([1,2,4,5,6]))

//method concat
const array2 = [].concat(array1); //клоную array1 в пустий масив array2
console.log(array2);

//method push with loop for
const array3 = new Array(); // створюю конструктором пустий масив
const cloneArray = (value) => {
  for (let i = 0; i < array1.length; i++) {
    value.push(array1[i]);
  }
  return value;
};
console.log(cloneArray(array3));

//method map
const array4 = array1.map((value, index, arr) => value);
console.log(array4);
function cloneArray1(arr){
  return arr.map((value) => value)
}
console.log(cloneArray1([1,2,4,5]))

//method slice
const array5 = array1.slice((value) => {
  value = array1.length;
  return value;
});
console.log(array5);
