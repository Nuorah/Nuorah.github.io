



const textResult = document.querySelector('.textResult');

const textSubmit = document.querySelector('.textSubmit');
const textField = document.querySelector('.textField');

let resetButton;

function transformText() {
  let text = textField.value
  let textLowerCase = text.toLowerCase()
  let textPunct = textLowerCase.replace(/\.|\!/g," si tu vois ce que je veux dire. Je ne suis pas raciste, mais")
  let textCut= textPunct.slice(0, -29)
  let textFinal = "Je ne suis pas raciste, mais " + textCut

  textResult.textContent = textFinal
}

textSubmit.addEventListener('click', transformText);
