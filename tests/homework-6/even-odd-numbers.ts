const number = 12;
if (number % 2 === 0) {
  console.log("Парне число");
} else console.log("Не парне число");

function getEvenOddNumber(number: number) {
  if (number % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}
getEvenOddNumber(3);
