/*
Напиши функцію, яка приймає обʼєкт і виводить усі ключі та значення. (гугліть як)
*/

const book = {
  title: "Khiba revut voly yak yasla povni?",
  author: "Panas Myrnyi",
  pages: "380",
  isAvailable: "true",
};

function returnObject(Object) {
  for (let key in Object) {
    console.log(`${key}: ${Object[key]}`);
  }
}

returnObject(book);
