const display = document.querySelector(".display input");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const equalTo = document.querySelector("#equalTo");
const del = document.querySelector("#del");
const allClear = document.querySelector("#allClear");
const dot = document.querySelector("#dot");
numbers.forEach((number) => {
  number.addEventListener("click", (number) => {
    display.value += number.target.innerText;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", (operator) => {
    const lastValue = display.value[display.value.length - 1];
    const lastTOLast = display.value[display.value.length - 2];
    if (!isNaN(lastValue)) {
      display.value += operator.target.innerText;
    } else if (lastTOLast == undefined) {
      display.value += "";
    } else if (isNaN(lastValue)) {
      if (lastValue !== operator.target.innerText) {
        display.value = display.value.slice(0, -1) + operator.target.innerText;
      } else {
        display.value += "";
      }
    }
  });
});
equalTo.addEventListener("click", () => {
  let result = eval(display.value);
  return (display.value = result);
});
del.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
allClear.addEventListener("click", () => {
  display.value = "";
});

dot.addEventListener("click", () => {
  const lastNumber = display.value.split(/[\+\-\*\/]/).pop(); // Get the current number
  if (!lastNumber.includes(".")) {
    display.value += ".";
  }
});
