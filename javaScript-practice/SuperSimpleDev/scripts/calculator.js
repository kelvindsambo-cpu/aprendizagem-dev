let inputText=document.querySelector("input");

function writeDigit(digit_btn){
  inputText.value += digit_btn.innerText;
}

let operators = ['+', '-', '*', '/'];

inputText.addEventListener("keydown", (event) => {
  if (!(/\d/.test(event.key)) || !operators.test(event.key)) {
    event.preventDefault();
  }
});