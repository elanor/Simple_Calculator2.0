import "./styles.css";
import calc from "./calc.js";
/* eslint no-eval: 0 */

window.reset = function () {
  let expression = document.querySelector(".phrase");
  expression.value = "";
};

window.addValue = function (element) {
  const button = element.innerText; // e.g. '1', '='
  calc.press(button);
  document.querySelector(".phrase").value = calc.getValue();
};

window.result = function () {
  calc.press("=");
  document.querySelector(".phrase").value = calc.getValue();
};

/* 
window.addValue = function (element) {
  let expression = document.querySelector(".phrase");
  if (notEmpty === false) {
    if (expression.innerText !== "invalid value") {
      expression.value += element.innerText;
    } else {
      expression.value = element.innerText;
    }
  } else {
     
      notEmpty = false;
      expression.value += element.innerText;
    }
  };

window.result = function () {
  let expression = document.querySelector(".phrase");
  try {
    let result = expression.value;
    expression.value = eval(result);
    notEmpty = true;
  } catch (e) {
    expression.value = "invalid value";
  }
  console.log("result is pressed!");
}; */
