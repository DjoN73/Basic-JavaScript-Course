"use strict";

// функция сложения двух чисел
function addition(a, b) {
    return a + b;
}

// функция вычитания двух чисел
function subtraction(a, b) {
    return a - b;
}

// функция деления двух чисел
function division(a, b) {
    return a / b;
}

// функция произведения двух чисел
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция принимает два числа и осуществялет математическую операцию
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation допускается "+", "-", "/", "*"
 * @throws {Error} если введена недопустимая операция, выдает ошибку
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error(`Операция ${operation} не предусмотрена`);
    }
}

console.log(mathOperation(11, 22, "+"));
console.log(mathOperation(33, 44, "-"));
console.log(mathOperation(55, 66, "/"));
console.log(mathOperation(77, 88, "*"));
console.log(mathOperation(88, 99, "hi"));
