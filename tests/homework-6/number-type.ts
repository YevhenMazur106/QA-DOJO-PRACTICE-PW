function checkNumberType(count) {
  if (count < 0) {
    console.log("Число від’ємне.");
  }
  if (count === 0) {
    console.log("Число дорівнює нулю.");
  }
  if (count > 0) {
    console.log("Число додатнє.");
  }
}
checkNumberType(-8);
