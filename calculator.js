// Errors that need to be fixed
// Subtracting decimals -> Correctly solves math but displayNunmber appends both decimals
// Multiple decimals can be added

// All preloaded declarations

var $displayNumber = document.getElementById("display-screen");
var storedOperator = "";
var firstNumber = "";
var secondNumber = "";
var computed = "no"; 

function add(num1,num2) {
    return num1 + num2;
};

function subtract(num1,num2) {
    return num1 - num2;
};

function multiply(num1,num2) {
    return num1 * num2;
};

function divide(num1,num2) {
    return num1 / num2;
};

function operate(operator,num1,num2) {
    if (operator === "+") {
        return add(num1,num2);
    } else if (operator === "-") {
        return subtract(num1,num2);
    } else if (operator === "*") {
        return multiply(num1,num2);
    } else if (operator === "/") {
        if (num2 == 0) {
            return $displayNumber.value = "Div by 0 err";
        } else {
            return divide(num1,num2)
        }
    };
};

function changeNumber(input) {
    if (computed == "yes") { // if statement used when calculated number is not required for further calculations
        clearCalc(); // 
        changeFirstNumber(input);
    } else {
        if (storedOperator.length < 1) {
            changeFirstNumber(input);
        } else {
            changeSecondNumber(input);
        };

        computed == "no";
    };
};

function changeFirstNumber(input) {
    if (firstNumber.length != 0) {
        firstNumber = appendNumbers(firstNumber, input.value);
        $displayNumber.value = appendNumbers($displayNumber.value, input.value);
    } else {
        firstNumber = input.value;
        $displayNumber.value = input.value;
    };
}

function changeSecondNumber(input) {
    if (secondNumber.length != 0) {
        secondNumber = appendNumbers(secondNumber, input.value);
        $displayNumber.value = appendNumbers($displayNumber.value, input.value);
    } else {
        secondNumber = input.value;
        $displayNumber.value = input.value;
    };
}

function clearCalc() {
    $displayNumber.value = 0;
    storedOperator = "";
    secondNumber = "";
    firstNumber = "";
    computed = "no";
};

function chooseOperator(input) {
    if (storedOperator.length > 0 && secondNumber.length > 0) {
        compute();
    } else if (storedOperator.length > 0 && secondNumber.length == 0) {
        storedOperator = input.value;
    };
    
    storedOperator = input.value;
    computed = "no"; // changed to "no" as user wishes to calculate second operation using result from first
};

function compute() {
    $displayNumber.value = operate(storedOperator, parseFloat(firstNumber), parseFloat(secondNumber));

    if ($displayNumber.value.length > 10) {
        $displayNumber.value = parseFloat($displayNumber.value).toFixed(10);
    };

    firstNumber = $displayNumber.value;
    secondNumber = "";
    storedOperator = "";
    computed = "yes"
};

function appendNumbers(num1,num2) {
    return "" + num1 + num2;
};

function appendDecimal() {
    if (storedOperator.length < 1) {
        firstNumber += ".";
        $displayNumber.value += ".";
    } else {
        secondNumber += ".";
        $displayNumber.value += ".";
    };
};

function clearDisplay() {
    $displayNumber.value = "";
}