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

let negate = document.querySelector(".negate");
let backspace = document.querySelector(".backspace");

negate.addEventListener("click", () => {
  negateNum();
});

function negateNum() {

  currentVal = -Math.abs(Number(currentVal));
  currentDisplay.textContent = currentVal.toString();
  
}

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

  prevValue = roundNum(prevValue);
  prevValue = prevValue.toString();
  prevValue = prevValue.toString();
}

function roundNum(num) {
  return Math.round(num * 1000) / 1000;
}

clear.addEventListener("click", () => {
  prevValue = "";
  currentVal = "";
  operator = "";
  prevDisplay.textContent = currentVal;
  currentDisplay.textContent = currentVal;
});

numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
    currentDisplay.textContent = currentVal;
  })
);

function handleNumber(num) {
  if (currentVal.length < 6) {
    currentVal += num;
  }
}

operators.forEach((op) =>
  op.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
    prevDisplay.textContent = `${prevValue} ${operator}`;
    currentDisplay.textContent = currentVal;
  })
);

function handleOperator(op) {
  operator = op;
  prevValue = currentVal;
  currentVal = "";
}

//console.log(operate(add, 5, 2))
