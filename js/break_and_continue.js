// Exercise 2:

// var oddNumber = prompt("Enter odd number 1-50");
//
//     while (isNaN(oddNumber) || (oddNumber %  2 === 0) || (oddNumber < 1) || (oddNumber > 50)) {
//         oddNumber = prompt("Not valid, please retry");
//     }
//     for (var i = 1; i < 50; i++) {
//         if (i == oddNumber) {
//             console.log("Number to skip: " + oddNumber);
//             continue;
//     } else if (i % 2 === 0) {
//             continue;
//     } else {
//             console.log("Odd number: " + i);
//     }
// }

// ************************************************************************** //

var oddNumber = prompt("Please enter odd number between 1-50.");

while (isNaN(oddNumber) || (oddNumber % 2 == 0) || (oddNumber < 1) || (oddNumber > 50)) {
    oddNumber = prompt("Invalid entry, please re-enter.");
}
for (var i = 1; i < 50; i++) {
    if (i == oddNumber) {
        console.log("Number to skip: " + i);
        continue;
    } else if (i % 2 === 0) {
        continue;
    } else {
        console.log("Here's an odd number: " + i);
    }
}