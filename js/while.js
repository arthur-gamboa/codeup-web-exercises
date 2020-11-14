// While Loop Exercises //

// var x = 2;
//
// while (x < 65526) {
//     console.log(x);
//     x = x * 2;
// }

// ************************************************************************** //

// do-while Loop Exercises //

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
console.log("I have " + allCones + " cones to sell");

do {
    var conesPurchased = Math.floor(Math.random() * 5) + 1;

    if (conesPurchased > allCones) {
        console.log("Can't sell you this many, you wanted " + conesPurchased + ", but all I have is " + allCones);
    } else {
        allCones = allCones - conesPurchased;
        console.log(conesPurchased + "..that many? No problem. " + allCones + "left to sell.");
    }
}    while (allCones > 0);

console.log("Sold all of my ice cream.");

// ************************************************************************** //

