/*
Скопіюй обʼєкт settings у нову змінну settingsCopy.  (перед цим створіть обʼєкт settings)
*/

const settings = {
  isAdmin: true,
  isMobileApp: false,
  ordersPagination: 20,
  balance: "300$",
};

// Object.assign() метод
const settingsCopy = Object.assign({}, settings);
console.log(settingsCopy);

// спред оператор
const settingsCopy1 = { ...settings };
console.log(settingsCopy1);

// import cloneDeep from 'lodash/cloneDeep';
// const settingsCopy2 = cloneDeep(settings);
// console.log(settingsCopy2);
