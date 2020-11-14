// Exercise 2:

// function showMultiplicationTable(number) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(number * i);
//     }
// }
function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

// ************************************************************************** //

// Exercise 3:

// function randomNumberLoop(number) {
//     for (var i = 1; i <= 10; i++) {
//         var randomNumber = Math.floor(Math.random() * (200 - 20 + 1) ) + 20;
//         if (randomNumber % 2 === 0) {
//             console.log(randomNumber + " is even.");
//         } else {
//             console.log(randomNumber + " is odd.");
//         }
//     }
// }
for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}

// ************************************************************************** //

// Exercise 4:
// function numberLoop() {
//     for (var i = 1; i < 10; i++) {
//         console.log(i.toString().repeat(i));
//     }
// }
for (var outer = 1; outer <= 9; outer++) {
    var output = '';

    for(var inner = 1; inner <= outer; inner++) {
        console.log("At this point our output bucket has: " + output + " and our outer counter is " + outer);
        output = output + outer;
    }
    console.log(output);
}

// ************************************************************************** //

// Exercise 5:
// function countDown() {
//     for (var i = 100; i > 4; i--) {
//         if (i % 5 === 0) {
//             console.log(i);
//         }
//     }
// }
for(vari = 100; i >= 5; i -= 5) {
    console.log(i);
}