/*
Програма, що додає дефіси між парними числами.   (завдання із зірочкою ⭐️)
Приклад:  
Ввід: 025468  
Вивід: 0-254-6-8  
*/

const numbers = "025468";

const lineBetweenEvenNumbers = (str) => {
  const digits = Array.from(str); // розбиваємо значення numbers на масив з окремими значеннями
  let mergedDigits = digits[0]; // починаємо з першої цифри [0], в масиві numbers буде 0

  for (let i = 1; i < digits.length; i++) {
    const prev = digits[i - 1]; // попереднє значення із масиву
    const current = digits[i]; // поточне значення із масиву

    if (parseInt(prev) % 2 === 0 && parseInt(current) % 2 === 0) {
      mergedDigits = mergedDigits + "-" + current;
    } else {
      mergedDigits = mergedDigits + current;
    }
  }

  return mergedDigits;
};

console.log(lineBetweenEvenNumbers(numbers));

const separateValuesFromString = numbers.split("");
console.log(separateValuesFromString);
console.log(typeof separateValuesFromString);

const separateValuesFromString1 = [...numbers];
console.log(separateValuesFromString1);

const separateValuesFromString2 = Array.from(numbers);
console.log(separateValuesFromString2);

const valueToNumber = (value) => {
  return parseInt(value);
};
console.log(valueToNumber(numbers[1]));
console.log(typeof valueToNumber(numbers[1]));
