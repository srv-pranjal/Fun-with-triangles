const triangleTypes = document.querySelectorAll(".triangle-type");
const triangleBoxes = document.querySelectorAll(".triangle-box");
const forms = document.querySelectorAll("form");
const inputNumbers = document.querySelectorAll(".input-number");
const message = document.querySelector("#message");
const outputMessage = document.querySelector("#output");

triangleTypes.forEach((triangleType, index) => {
  triangleType.addEventListener("click", () => {
    displayOrHideBox(index);
    message.style.display = "block";
    outputMessage.style.display = "block";
    message.innerText = "Output will be displayed below 👇";
    outputMessage.innerText = "";
  });
});

function displayOrHideBox(showIndex) {
  triangleBoxes.forEach((triangleBox, index) => {
    if (index === showIndex) {
      triangleBox.style.display = "block";
    } else {
      triangleBox.style.display = "none";
    }
  });
}

function calAreaForRightAngled() {
  const base = Number(inputNumbers[0].value);
  const height = Number(inputNumbers[1].value);
  return (base * height) / 2;
}

function calAreaForScalene() {
  const sideA = Number(inputNumbers[2].value);
  const sideB = Number(inputNumbers[3].value);
  const sideC = Number(inputNumbers[4].value);
  let semiPerimeter = (sideA + sideB + sideC) / 2;
  let area =
    semiPerimeter *
    (semiPerimeter - sideA) *
    (semiPerimeter - sideB) *
    (semiPerimeter - sideC);
  return Math.sqrt(area);
}

function calAreaForEquilateral() {
  const side = Number(inputNumbers[5].value);
  return (side ** 2 / 4) * Math.sqrt(3);
}

function formSubmitHandler(e, index) {
  e.preventDefault();
  let area = 0;
  if (index === 0) {
    message.innerText =
      "Area is calculated using the formula [area = 1/2(base * height)]";
    area = calAreaForRightAngled();
  } else if (index === 1) {
    area = calAreaForScalene();
    message.innerText =
      "Area is calculated using the formula [area = √s(s-a)(s-b)(s-c)]";
    if (!area || area === 0) {
      message.innerText =
        "Enter valid side lengths such that each side length should be less than sum of other two sides";
    }
  } else {
    message.innerHTML =
      "Area is calculated using the formula [area = side<sup>2</sup>√3/4]";
    area = calAreaForEquilateral();
  }
  if (area && area !== 0) {
    if (!Number.isInteger(area)) area = area.toFixed(4);
    outputMessage.innerText = area;
  }
}

forms.forEach((form, index) => {
  form.addEventListener("submit", (e) => formSubmitHandler(e, index));
});
