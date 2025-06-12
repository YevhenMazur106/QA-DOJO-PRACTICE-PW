/*
Використай Object.keys() для підрахунку кількості властивостей. (погугліть про Object.keys())
*/

const book = {
  title: "Khiba revut voly yak yasla povni?",
  author: "Panas Myrnyi",
  pages: "380",
  isAvailable: "true",
};

// метод Object.keys()для роботи з об'єктами.
console.log(Object.keys(book));
console.log(Object.keys(book).length);
Object.keys(book).forEach((key) => {
  console.log(`${key}: ${book[key]}`);
});

const bookValues = Object.keys(book)

console.log(typeof bookValues)
console.log(typeof bookValues === "object");
console.log(typeof bookValues === "object" && !Array.isArray(bookValues));

