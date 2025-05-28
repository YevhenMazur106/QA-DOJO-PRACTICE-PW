function greetingsByTime(time: number) {
  if (time >= 5.0 && time < 12.0) {
    console.log("Доброго ранку!");
  }
  if (time >= 12.0 && time <= 18.0) {
    console.log("Доброго дня!");
  }
  if (time > 18.0 && time <= 24.0) {
    console.log("Доброго вечора!");
  }
}
greetingsByTime(18.01);
