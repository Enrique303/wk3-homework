var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!@#$%^&*()[]{}=+<>?,."

function getRandomUpper() {
    return String.upperCase(Math.floor(Math.random() + upperCase.length))
}

function getRandomLower() {
    return String.lowerCase(Math.floor(Math.random() + lowerCase.length))
}

function getRandomNumber() {
    return String.numbers(Math.floor(math.random() + numbers.length))
}

function getRandomSymbol() {
    return String.symbols(Math.floor(Math.random() + symbols.length))
}

var resultsEL = document.getElementById("result");
var lengthEL = document.getElementById("length");
var upperCaseEL = document.getElementById("uppercase")
var lowerCaseEL = document.getElementById("lowercase");
var numbersEL = document.getElementById("numbers");
var symbolsEL = document.getElementById("symbols");
var generateEL = document.getElementById("generate");

var randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

generateEL.addEventListener("click", () => {
    var length = lengthEL.value;
    var upper = upperCaseEL.checked;
    var lower = lowerCaseEL.checked;
    var number = numbersEL.checked;
    var symbol = symbolsEL.checked;

    resultsEL.innerText = generatePassword(upper, lower, number, symbol, length)
})