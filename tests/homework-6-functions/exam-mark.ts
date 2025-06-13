const examMark = 42;

function checkExamMark(examMark) {
  if (examMark >= 50) {
    console.log("Тест складено");
  }
  if (examMark < 50) {
    console.log("Тест не складено");
  }
};
checkExamMark(examMark);
