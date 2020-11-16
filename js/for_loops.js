// Exercise 2:

// function showMultiplicationTable(number) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(number * i);
//     }
// }


// Separate solution:

// function showMultiplicationTable(number) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + (number * i));
//     }
// }



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


// Separate solution:

// for (var i = 0; i < 10; i++) {
//     var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber + " is even.");
//     } else {
//         console.log(randomNumber + " is odd.");
//     }
// }

function oddOrEven (number) {

    for (var i = 1; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
        if (randomNumber % 2 !== 0) {
            console.log(randomNumber + " Odd number.");
        } else {
            console.log(randomNumber + " Even number.");
        }
    }
}

// ************************************************************************** //

// Exercise 4:
// function numberLoop() {
//     for (var i = 1; i < 10; i++) {
//         console.log(i.toString().repeat(i));
//     }
// }


// Separate solution:

// function numberTree() {
//     for (var i = 1; i < 10; i++) {
//         console.log(i.toString().repeat(i));
//     }
// }


// Separate solution:

function numberTree() {
    for (var x = 1; x < 10; x++) {
        var x1 = "";

        for(var y = 1; y <= x; y++) {
            x1 = x1 + x;
        }
            console.log(x1);
    }
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


// Separate solution:

// for(var i = 100; i >= 5; i -= 5) {
//     console.log(i);
// }

function countDown() {
    for (var i = 100; i > 4; i -= 5) {
        console.log(i);
    }
}
