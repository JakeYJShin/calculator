// Errors that need to be fixed
// Dividing a number by a decimal appends the decimal to the displayNumber.value
// but still produces proper result when calculated

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
    if (firstNumber.length > 10) {
        return;
    };

    if (firstNumber.length != 0) {
        firstNumber = appendNumbers(firstNumber, input.value);
        $displayNumber.value = appendNumbers($displayNumber.value, input.value);
    } else {
        firstNumber = input.value;
        $displayNumber.value = input.value;
    };
}

function changeSecondNumber(input) {
    if (secondNumber.length >10) {
        return;
    };

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
    if (firstNumber.length == 0) {
        return;
    };

    if (storedOperator.length > 0 && secondNumber.length > 0) {
        compute();
    } else if (storedOperator.length > 0 && secondNumber.length == 0) {
        storedOperator = input.value;
    };
    
    storedOperator = input.value;
    computed = "no"; // changed to "no" as user wishes to calculate second operation using result from first
};

function compute() {
    if (firstNumber.length == 0 || storedOperator.length == 0 || secondNumber.length == 0) {
        return;
    };

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
        if (!checkDecimal(firstNumber)) {
            firstNumber += ".";
            $displayNumber.value += ".";
        };
    } else {
        if (!checkDecimal(secondNumber)) {
            if (secondNumber.length < 1) {
                clearDisplay();
            };
            secondNumber += ".";
            $displayNumber.value += ".";
        };
    };
};

function checkDecimal(input) {
    var numArr = input.split("");

    if (numArr.includes(".")) {
        return true
    } else {
        return false
    };
};

function clearDisplay() {
    $displayNumber.value = "0";
}
