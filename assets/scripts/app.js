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
  const userNumber = getUserNumber();
  const intialResult = currentResult;
  currentResult = currentResult + userNumber;
  writeDescriptionOutput("+", userNumber, intialResult);
  logHistory("+",userNumber,intialResult,currentResult);
}

function subtact() {
  const userNumber = getUserNumber();
  const intialResult = currentResult;
  currentResult = currentResult - userNumber;
  writeDescriptionOutput("-", userNumber, intialResult);
  logHistory("-",userNumber,intialResult,currentResult);
}

function multiply() {
  const userNumber = getUserNumber();
  const intialResult = currentResult;
  currentResult = currentResult * userNumber;
  writeDescriptionOutput("*", userNumber, intialResult);
  logHistory("*",userNumber,intialResult,currentResult);
}

function divide() {
  const userNumber = getUserNumber();
  const intialResult = currentResult;
  currentResult = currentResult / userNumber;
  writeDescriptionOutput("/", userNumber, intialResult);
  logHistory("/",userNumber,intialResult,currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtact);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
