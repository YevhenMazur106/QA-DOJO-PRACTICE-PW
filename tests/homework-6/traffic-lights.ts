function checkTrafficLights(color: string) {
  if (color === "Green") {
    console.log("переходьте");
  }
  if (color === "Yellow") {
    console.log("підготуйтеся");
  }
  if (color === "Red") {
    console.log("зачекайте");
  }
}
checkTrafficLights("Green");
