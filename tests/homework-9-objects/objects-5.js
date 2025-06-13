/*
Перевір, чи існує поле role в обʼєкті user.
*/

const book = {
  title: "Khiba revut voly yak yasla povni?",
  author: "Panas Myrnyi",
  pages: "380",
  isAvailable: "true",
};

function checkFieldAvailability(obj, keyToCheck) {
  let found = true;
  for (let key in obj) {
    if (key === keyToCheck) {
      found = false;
    }
  }
  if (found) {
    console.log(`поле "${keyToCheck}" НЕ присутнє в обєкті`);
  } else {
    console.log(`поле "${keyToCheck}" присутнє в обєкті`);
  }
}

checkFieldAvailability(book, "role");
