/* eslint no-eval: 0 */
const calculator = {
  memory: "",
  lastResult: "",

  getValue() {
    return this.memory;
  },
  press(button) {
    if ("1234567890".includes(button) && this.lastResult === "") {
      this.memory += button;
      return;
    }

    if ("1234567890".includes(button) && this.lastResult !== "") {
      this.memory = "";
      this.lastResult = "";
      this.memory += button;
      return;
    }

    if ("+-/*.".includes(button)) {
      this.memory += button;
      this.lastResult = "";
      return;
    }

    if (button === "=") {
      this.memory = "" + eval(this.memory);
      this.lastResult = this.memory;
      return;
    }
    if (button === "C") {
      this.memory = "";
      this.lastResult = "";
      return;
    }
  }
};

export default calculator;
