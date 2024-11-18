const defualtResult = 0;
let currentResult = defualtResult;
let history = [];

function getUserNumber() {
  return parseInt(userInput.value);
}

function writeDescriptionOutput(operation, userInput, intialValue) {
  const descripton = `${intialValue} ${operation} ${userInput}`;
  outputResult(currentResult, descripton);
}

function calculate(calculationType) {

  const userNumber = getUserNumber();
  const intialResult = currentResult;
  if(calculationType!=="+"&&calculationType!=="-"&&calculationType!=="*"&&calculationType!=="/"||!userNumber){
    return;
  }
  if (calculationType == "+") {
    currentResult = currentResult + userNumber;
  } else if (calculationType == "-") {
    currentResult = currentResult - userNumber;
  } else if (calculationType == "*") {
    currentResult = currentResult * userNumber;
  } else if (calculationType == "/") {
    currentResult = currentResult / userNumber;
  }
  writeDescriptionOutput(calculationType, userNumber, intialResult);
  logHistory(calculationType, userNumber, intialResult, currentResult);
}

function logHistory(operation, userInput, intialValue, finalResult) {
  const descripton = `${intialValue} ${operation} ${userInput}`;
  outputResult(currentResult, descripton);
  const log = {
    operation: operation,
    previousResult: intialValue,
    number: userInput,
    currentAnswer: finalResult,
  };
  history.push(log);
  console.log(history);
}

function add() {
  calculate("+");
}

function subtact() {
  calculate("-");
}

function multiply() {
  calculate("*");
}

function divide() {
  calculate("/");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtact);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
