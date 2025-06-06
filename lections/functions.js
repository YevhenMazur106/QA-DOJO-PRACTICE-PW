if (true) {
  console.log("This is block");
} else {
  console.log("this is else");
}

const temperature = 12;

if (temperature >= 10) {
  console.log("піду в колготках");
} else {
  console.log("вдягну колготи");
}

const date = "Mon 26";
const time = "19:30";
const room = "blue";
const title = "Rembo";

function moviecontroller(date, time, room, title) {
  const isValidDate = date === "Mon 26";
  const isValidTime = time === "19:30";
  const isValidRoom = room === "blue" || room === "red";
  const isValidTitle = title === "Rembo";

  if (isValidDate && isValidTime && isValidRoom && isValidTitle) {
    console.log("Віхд дозволено");
  } else {
    console.log("Вхід заборонено");
  }
}

moviecontroller("Mon 26", "19:30", "gray", "Rembo");
