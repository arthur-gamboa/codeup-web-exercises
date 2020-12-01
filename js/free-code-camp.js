//33.//
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
//*****************************************//
//34.//
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
//*****************************************//
//35.//
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
//*****************************************//
//36.//
var myList = [["Chocolate Bar", 15], ["string2", 1], ["string3", 2],
    ["string4", 3], ["string5", 4]];
//*****************************************//
//37.//
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();
//*****************************************//
//38.//
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(1, 2);
//*****************************************//
//39.//
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
//*****************************************//
//40.//
function myLocalScope() {
    'use strict';

    // Only change code below this line
    var myVar
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
//*****************************************//
//41.//
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
}

myOutfit();
//*****************************************//
//42.//
function timesFive(input) {
    return input * 5;
}
//*****************************************//
//43.//
