function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  if(!b) return 'ERROR';
  return a / b;
};

function operate(operator, a, b) {
  if(operator == 'add') return add(a, b);
  if(operator == 'subtract') return subtract(a, b);
  if(operator == 'multiply') return multiply(a, b);
  if(operator == 'divide') return divide(a, b);
};

function addToDisplay(num) {
  if(display.textContent == 0) {
    display.textContent = num;
  } else {
    display.textContent += num;
  };
};

function clearDisplay() {
  display.textContent = 0;
  firstNumber = 0;
  operator = '';
};

function updateCalculator(button) {
  console.log(button);
  if(button == 'clear') clearDisplay();
  if(button[0] == 'n') addToDisplay(button[1]);
  if(button[0] == 'o') {
    operator = button.slice(2);
    firstNumber = Number(display.textContent);
    display.textContent = '0';
  }
  if(button == 'equal') {
    let result = operate(operator, firstNumber, Number(display.textContent))
    if(result % 1 > 0) {
      result = precisionRound(result, 2);
    };
    display.textContent = result;
    firstNumber = Number(display.textContent);
  };
};

function precisionRound(number, precision) {
  let factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    updateCalculator(button.id);
  });
});




let firstNumber = 0;
let operator = '';

const display = document.getElementById('display');
display.textContent = '0';