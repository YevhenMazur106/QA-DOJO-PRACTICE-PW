/*
Напиши функцію, яка приймає обʼєкт і повертає масив значень. (тобто масив зі значеннями обʼєкта)
*/

const book = {
  title: "Khiba revut voly yak yasla povni?",
  author: "Panas Myrnyi",
  pages: "380",
  isAvailable: "true",
};
// через for in  і метод масивів push
function returnArrayFromObject(obj) {
  const objValues = [];
  for (key in obj) {
    objValues.push(`${obj[key]}`);
  }
  console.log(objValues);
}
returnArrayFromObject(book);

//через метод Object.values()
function returnArrayOfValues(obj) {
  return console.log(Object.values(obj));
}
returnArrayOfValues(book);

const values = Object.values(book);
console.log(values);

//перевірка
console.log(typeof values);
console.log(Array.isArray(values));
console.log(typeof values === "object");
console.log(typeof values === "object" && !Array.isArray(values));
