import "./styles.css";
import calc from "./calc.js";
/* eslint no-eval: 0 */

window.addValue = function (element) {
  const button = element.innerText; // e.g. '1', '='
  calc.press(button);
  document.querySelector(".phrase").value = calc.getValue();
};

window.result = function () {
  calc.press("=");
  document.querySelector(".phrase").value = calc.getValue();
};
