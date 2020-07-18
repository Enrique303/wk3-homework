function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
}

function getRandomSymbol() {
    var symbols = '!@#$%^&*()-_=+';
    return symbols[Math.floor(Math.random() * symbols.length)]
}

var resultsEL = document.getElementById("results");
var lengthEL = document.getElementById("length");
var upperCaseEL = document.getElementById("uppercase")
var lowerCaseEL = document.getElementById("lowercase");
var numbersEL = document.getElementById("numbers");
var symbolsEL = document.getElementById("symbols");
var generatePasswordEL = document.getElementById("generate");

var randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

generate.addEventListener('click', () => {
    var length = lengthEL.value;
    var upper = upperCaseEL.checked;
    var lower = lowerCaseEL.checked;
    var number = numbersEL.checked;
    var symbol = symbolsEL.checked;

    resultsEL.innerText = generatePassword(upper, lower, number, symbol, length);
});
function generatePassword(upper,lower,number,symbol,length){
    var generatedPassword = '';
    var typesCount = upper + lower + number + symbol;
    var typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for( var i= 0; i< length; i +=typesCount){
        typesArr.forEach(type =>{
            var funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }
    var finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}