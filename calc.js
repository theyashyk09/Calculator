let toBeCalc = "";

let calcResult = document.getElementById("calText");

let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "=") {
      toBeCalc = eval(toBeCalc);
      calcResult.value = toBeCalc;
    } else if (button.textContent == "AC") {
      toBeCalc = "";
      calcResult.value = toBeCalc;
    } else if (button.textContent == "DEL") {
      toBeCalc = calcResult.value.slice(0, -1);
      calcResult.value = toBeCalc;
    } else if (button.textContent == "√") {
      calcResult.value = Math.pow(toBeCalc, 1 / 2);
    } else if (button.textContent == "n²") {
      calcResult.value = Math.pow(toBeCalc, 2);
    } else {
      toBeCalc = toBeCalc + button.textContent;
      calcResult.value = toBeCalc;
    }
  });
});
