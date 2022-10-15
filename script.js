let operator = "";
let prevValue = "";
let currentVal = "";
let prevDisplay = document.querySelector(".prev-display-text");
let currentDisplay = document.querySelector(".curr-display-text");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".op-button");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equals-button");
let decimal = document.querySelector(".dot");
//TODO fix functionality for these buttons
let negate = document.querySelector(".negate");
let backspace = document.querySelector(".backspace");
//TODO fix negate after pressing equals, if u press negate iagain it brings up last operand used
negate.addEventListener("click", () => {
  negateNum();
});

function negateNum() {

  currentVal = -Math.abs(Number(currentVal));
  currentDisplay.textContent = currentVal.toString();
  
}
//TODO backspace doesnt work after negating number
backspace.addEventListener("click", () => {
    currentVal = currentVal.slice(0, currentVal.length - 1);
    currentDisplay.textContent = currentVal;
});

equal.addEventListener("click", () => {
  calculate();
  prevDisplay.textContent = "";
  currentDisplay.textContent = prevValue;
});

decimal.addEventListener("click", () => {
  addDecimal();
});

function addDecimal() {
  if (!currentVal.includes(".")) {
    currentVal += ".";
    currentDisplay.textContent += ".";
  }
}

function calculate() {
  prevValue = Number(prevValue);
  currentVal = Number(currentVal);

  if (operator === "+") {
    prevValue += currentVal;
  } else if (operator === "-") {
    prevValue -= currentVal;
  } else if (operator === "÷") {
    prevValue /= currentVal;
  } else {
    prevValue *= currentVal;
  }
  
  
  const numberButtons = document.querySelectorAll('.number')
  const operationButtons = document.querySelectorAll('.op-button')
  const equalsButton = document.querySelector('.equals-button')
  const deleteButton = document.querySelector('.backspace')
  const allClearButton = document.querySelector('.clear')
  const prevDisplayValue = document.querySelector('.prev-display-text')
  const currentDisplayValue = document.querySelector('.curr-display-text')
  const negateButton = document.querySelector('.negate');

  const calculator = new Calculator(prevDisplayValue, currentDisplayValue)
  
  negateButton.addEventListener('click', ()=>{
    calculator.inverse();
    calculator.updateDisplay();
  });


  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })