"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 *
 * isGreaterThan
 * isLessThan
 * isEqualNumber
 * isEqual
 * isNot
 * calcAbs
 * calcCube
 * isTypeMatch
 * findLongestString
 * isFactor
 */

//isGreaterThan
// function isGreaterThan(input1, input2) {
//     return input1 > input2;
// }
function isGreaterThan(input1, input2) {
    if (typeof input1 !== "number" || typeof input2 !== "number") {
        return false;
    }
    return parseFloat(input1) > parseFloat(input2);
}


//isLessThan
function isLessThan(input1, input2) {
    return Number(input1) < Number(input2);
}


//isEqualNumber
function isEqualNumber(input1, input2) {
    return parseInt(input1) === parseInt(input2);
}


//isEqual
// function isEqualNumber (a, b) {
//     return a === b;
function isEqual(a, b) {
    return a == b;
}


//isNot
function isNot(input) {
    return (typeof input !== "boolean") ? false : !input;
}


//calcAbs
function calcAbs(number) {
    return (typeof number !== "number") ? 0 : Math.abs(number);
}

//calcCube
function calcCube(number) {
    return (typeof number !== "number") ? 0 : Math.pow(number, 3);
}

//isTypeMatch
function isTypeMatch(input1, input2) {
    if (input1 === null || input2 === null) {
        return false;
    }
    return (typeof input1 === typeof input2);
}

//findLongestString
function findLongestString(a, b) {
    if(typeof a !== "string" && typeof b !== "string") {
        return "";
    } else if (typeof a !== "string" || typeof b !== "string") {
        return (typeof a === "string") ? a : b;
    }else {
        return (a.length > b.length) ? a : b;
    }
}


//isFactor
function isFactor(a, b) {
    return parseFloat(a) % parseFloat(b) === 0;
}
