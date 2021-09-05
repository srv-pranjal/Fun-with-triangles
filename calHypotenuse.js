const inputSides = document.querySelectorAll(".input-sides");
const message = document.querySelector("#message");
const outputMessage = document.querySelector("#output");
const formID = document.querySelector("#form");

function calculateHypotenuse() {
  let hypotenuse = 0;
  inputSides.forEach((side) => {
    hypotenuse += Number(side.value) ** 2;
  });
  return Math.sqrt(hypotenuse);
}

function formSubmitHandler(e) {
  e.preventDefault();
  message.innerHTML =
    "Hypotenuse is calculated using the formula [hypotenuse = √(base<sup>2</sup> + height<sup>2</sup>)]";
  let hypotenuse = calculateHypotenuse();
  if (!Number.isInteger(hypotenuse)) {
    hypotenuse = hypotenuse.toFixed(4);
  }
  outputMessage.innerText = hypotenuse;
}

formID.addEventListener("submit", formSubmitHandler);
