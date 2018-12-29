
function createParagraph() {
let para = document.createElement('p');
document.body.appendChild(para);
para.textContent = 'Prout!';
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
buttons[i].addEventListener('click', createParagraph);
};
