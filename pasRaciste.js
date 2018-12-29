



const textResult = document.querySelector('.textResult');

const textSubmit = document.querySelector('.textSubmit');
const textField = document.querySelector('.textField');

let resetButton;

function transformText() {
  let text = textField.value
  let textTransformed = "Je ne suis pas raciste, mais " + text + " si tu vois"
  + " ce que je veux dire."
  textResult.textContent = textTransformed
}

textSubmit.addEventListener('click', transformText);
