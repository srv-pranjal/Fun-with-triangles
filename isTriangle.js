const inputAngles = document.querySelectorAll(".input-angles");
const outputMessage = document.querySelector("#output-message");
const formID = document.querySelector("#form");

function checkIfAnglesFormTriangle() {
  let sum = 0;
  inputAngles.forEach((angle) => {
    sum += Number(angle.value);
  });
  if (sum === 180) return true;
  return false;
}

function formSubmitHandler(e) {
  e.preventDefault();
  const isTriangle = checkIfAnglesFormTriangle();
  if (isTriangle) {
    outputMessage.innerText =
      "Wohoooo!! These angles together do make a triangle🥳🥳";
  } else {
    outputMessage.innerText =
      "Oh no!! These angles together cannot make a triangle. Why?\nHint: Sum of angles = 180";
  }
}

formID.addEventListener("submit", formSubmitHandler);
