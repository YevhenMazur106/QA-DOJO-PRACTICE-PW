/*
Числа від 1 до 345
✏️ Використай цикл, щоб  щоб створити масив з числами  від 1 до 345.
*/
const array = new Array();

const fillArray = (arr) => {
  for (let i = 1; i <= 345; i++) {
    arr.push(i);
  }
  return arr;
};

const filledArray = fillArray(array);
console.log(filledArray);

const createArrayWithRange = (start, end) => {
  const result = [];
  for (i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const flexArray = createArrayWithRange(1, 345);
console.log(flexArray);
