const userAge = 17;

function checkUserAge(age: number) {
  if (userAge >= 18) {
  return ("Ви можете голосувати.");
} else {
  return ("Ви ще не можете голосувати.");
};
}

checkUserAge(userAge);