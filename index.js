function random() {
  return Math.random() * 2000;
}
let i = 0;
const message = "It's Recursive timeout".split("");

let displayMessage = setTimeout(addNextLetter, random());

function addNextLetter() {
  let letter = document.createElement("span");
  letter.innerHTML = `<span>${message[i]}</span>`;
  document.body.appendChild(letter);
  i++;
  if (i < message.length) {
    setTimeout(addNextLetter, random());
  }
}
