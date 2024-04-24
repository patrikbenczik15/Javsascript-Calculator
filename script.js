let presentResult = 0;
let answer;
// ! first 2 results => 2 numbers; 8 operators -> +,-,*,/,%,^,√,!
let results = [],
  operators = [false, false, false, false, false, false, false, false];

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const clear = document.getElementById("clear");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const equal = document.getElementById("equal");
const dec = document.getElementById("dec");
const sqrt = document.getElementById("sqrt");
const pow = document.getElementById("pow");
const factorial = document.getElementById("factorial");
let operator = document.getElementById("operator");
let screen = document.querySelector(".screen");

one.addEventListener("click", () => {
  presentResult = presentResult * 10 + 1;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});

two.addEventListener("click", () => {
  presentResult = presentResult * 10 + 2;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});
three.addEventListener("click", () => {
  presentResult = presentResult * 10 + 3;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});
four.addEventListener("click", () => {
  presentResult = presentResult * 10 + 4;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});
five.addEventListener("click", () => {
  presentResult = presentResult * 10 + 5;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});
six.addEventListener("click", () => {
  presentResult = presentResult * 10 + 6;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});
seven.addEventListener("click", () => {
  presentResult = presentResult * 10 + 7;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});
eight.addEventListener("click", () => {
  presentResult = presentResult * 10 + 8;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});
nine.addEventListener("click", () => {
  presentResult = presentResult * 10 + 9;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});
zero.addEventListener("click", () => {
  presentResult = presentResult * 10;
  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
});

clear.addEventListener("click", () => {
  presentResult = 0;
  changeValue(presentResult);
  operators = [false, false, false, false, false, false, false, false];
  results = [];
  document.getElementById("operator").innerHTML = "";
  console.log(`Current presentResult: ${presentResult}`);
});

add.addEventListener("click", () => {
  for (let i = 0; i < operators.length; i++) {
    if (i == 0) operators[i] = true;
    else operators[i] = false;
  }
  document.getElementById("operator").innerHTML = "+";
  if (results.length == 0) results.push(presentResult);
  console.log(results);
  presentResult = 0;
});
subtract.addEventListener("click", () => {
  for (let i = 0; i < operators.length; i++) {
    if (i == 1) operators[i] = true;
    else operators[i] = false;
  }
  document.getElementById("operator").innerHTML = "-";
  if (results.length == 0) results.push(presentResult);
  console.log(results);
  presentResult = 0;
});
multiply.addEventListener("click", () => {
  for (let i = 0; i < operators.length; i++) {
    if (i == 2) operators[i] = true;
    else operators[i] = false;
  }
  document.getElementById("operator").innerHTML = "*";
  if (results.length == 0) results.push(presentResult);
  console.log(results);
  presentResult = 0;
});
divide.addEventListener("click", () => {
  for (let i = 0; i < operators.length; i++) {
    if (i == 3) operators[i] = true;
    else operators[i] = false;
  }
  document.getElementById("operator").innerHTML = "/";
  if (results.length == 0) results.push(presentResult);
  console.log(results);
  presentResult = 0;
});

mod.addEventListener("click", () => {
  for (let i = 0; i < operators.length; i++) {
    if (i == 4) operators[i] = true;
    else operators[i] = false;
  }
  document.getElementById("operator").innerHTML = "%";
  if (results.length == 0) results.push(presentResult);
  console.log(results);
  presentResult = 0;
});

pow.addEventListener("click", () => {
  for (let i = 0; i < operators.length; i++) {
    if (i == 5) operators[i] = true;
    else operators[i] = false;
  }
  document.getElementById("operator").innerHTML = "^";
  if (results.length == 0) results.push(presentResult);
  console.log(results);
  presentResult = 0;
});

const factorialFunction = (n) => {
  if (n == 0) return 1;
  else return n * factorialFunction(n - 1);
};
factorial.addEventListener("click", () => {
  for (let i = 0; i < operators.length; i++) {
    if (i == 7) operators[i] = true;
    else operators[i] = false;
  }
  document.getElementById("operator").innerHTML = "!";
  if (results.length == 0) results.push(presentResult);
  console.log(results);
  presentResult = 0;
});

sqrt.addEventListener("click", () => {
  for (let i = 0; i < operators.length; i++) {
    if (i == 6) operators[i] = true;
    else operators[i] = false;
  }
  document.getElementById("operator").innerHTML = "&radic;";
  if (results.length == 0) results.push(presentResult);
  console.log(results);
  presentResult = 0;
});

equal.addEventListener("click", () => {
  results.push(presentResult);

  if (operators[0] == true) {
    presentResult = results[0] + results[1];
  } else if (operators[1] == true) {
    presentResult = results[0] - results[1];
  } else if (operators[2] == true) {
    presentResult = results[0] * results[1];
  } else if (operators[3] == true) {
    presentResult = results[0] / results[1];
  } else if (operators[4] == true) {
    presentResult = results[0] % results[1];
  } else if (operators[5] == true) {
    presentResult = results[0] ** results[1];
  } else if (operators[6] == true) {
    if (results[0] < 0) presentResult = "Error";
    else presentResult = Math.sqrt(results[0]);
  } else if (operators[7] == true) {
    presentResult = factorialFunction(results[0]);
  }

  changeValue(presentResult);
  console.log(`Current presentResult: ${presentResult}`);
  results = [presentResult];
  document.getElementById("operator").innerHTML = "";
  operators = [false, false, false, false, false, false, false, false];
  console.log(results);
});
function changeValue(presentResult) {
  if (
    presentResult == "Infinity" ||
    presentResult == "-Infinity" ||
    presentResult == "NaN"
  )
    presentResult = "Error";
  document.getElementById("display").innerHTML = presentResult;
}
