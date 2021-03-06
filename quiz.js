const inputButtons = document.querySelectorAll("input");
const formID = document.querySelector("form");
const outputMessage = document.querySelector("#output");
const quizBoxes = document.querySelectorAll(".quiz-box");
const correctAnswers = ["option1", "option3", "option1", "option2", "option3"];

function getMarks() {
  let marks = 0;
  let markedAnswers = [];
  inputButtons.forEach((inputButton) => {
    if (inputButton.checked) markedAnswers.push(inputButton.value);
  });
  for (let index = 0; index < correctAnswers.length; index++) {
    if (markedAnswers[index] === correctAnswers[index]) {
      marks += 1;
      quizBoxes[index].style.backgroundColor = "#a4ff7a";
    } else quizBoxes[index].style.backgroundColor = "#ff7a7a";
  }
  return marks;
}

function formSubmitHandler(e) {
  e.preventDefault();
  const totalMarks = getMarks();
  outputMessage.innerText = `Total Marks = ${totalMarks}`;
}

formID.addEventListener("submit", formSubmitHandler);
