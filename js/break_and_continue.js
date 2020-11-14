// Exercise 2:

// var oddNumber = prompt("Pick an odd number between 1 and 50");
//
// function skipOddNumber(oddNumber) {
//     while (oddNumber % 2 === 0 || oddNumber > 49 || oddNumber < 1) {
//         oddNumber = prompt("Not valid, please retry input.")
//
//     }
//     console.log("Number to skip is " + oddNumber);
// }

// break and continue step 2
var userNum = prompt("Please enter odd number between 1 - 50.");

while(isNaN(userNum) || (userNum % 2 !== 0) || (userNum < 1) || (userNum > 50)) {

userNum = prompt("That wasn't a valid number, please re-enter.");
}

// break and continue step 3
console.log("Number to skip is: " + userNum);

for (var i = 1; i < 50; i++) {
    if (i == userNum) {
        console.log("Yikes, skipping number " + i);
        continue;
    } else if (i % 2 === 0) {
        continue;
    } else {
        console.log("Here is an odd number: " + i);
    }
}
// ************************************************************************** //

