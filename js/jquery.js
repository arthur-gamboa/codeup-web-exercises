"use strict";
// window.onload = function() {
//     alert( 'The page has finished loading!' );
// }


//..** ID Selectors **..//


// Create content in your HTML file using at least the following elements:
// h1, p, ul, li, div.

// Add several attributes to your elements; you will need both id and class attributes.

// // Use jQuery to select an element by the id. Alert the contents of the element.
// $("#div-id-1").css("font-size", "26px");
//
// $(".list-group").css("background-color", "blue");
//
// // Update the jQuery code to select and alert a different id.
// var example = $("#div-id-2").html();
// alert(example);
//
// // Update the jQuery code to select and alert a different id.
// var example_2 = $("#ul-1").text();
// alert(example_2);


//..** Class Selectors **..//


// Remove your custom jQuery code from previous exercises.
// Update your code so that at least 3 different elements have the same class named codeup.
// $(".codeup").css("border", "1px solid red");


//..** Element Selectors **..//

// Remove your custom jQuery code from previous exercises.
// Using jQuery, set the font-size of all li elements to 20px.
// Craft selectors that highlight all the h1, p, and li elements.
// Create a jQuery statement to alert the contents of your h1 element(s).

// $("li").css("font-size", "20px");
//
//
// $("h1, p, li").css("background-color", "lightgrey");
// // this -^- is this same as all of these -v-
// $("h1").css("background-color", "lightgrey");
// $("p").css("background-color", "lightgrey");
// $("li").css("background-color", "lightgrey");


//***********************************************************************//


//***... MOUSE EVENTS ...***//

// Remove your custom jQuery code from previous exercises.

// Add jQuery code that will change the background color of an h1 element when clicked.
// $("h1").click(function() {
//     $(this).css("background-color", "pink");
// });

// Make all paragraphs have a font size of 18px when they are double clicked.
// $("p").dblclick(function() {
//     $(this).css("font-size", "30px");
// });

// Set all li text color to red when the mouse is hovering; reset to black when it is not.
// $("li").hover(function() {
//     $(this).css("color", "red");
//     },
//     function() {
//         $(this).css("color", "black");
//     }
// );

//*************************** KONAMI CODE ***************************//

// $(document).keydown(function(event){
//     console.log(event.keyCode);
// });

//Allow the user to enter the Konami Code: "↑ ↑ ↓ ↓ ← → ← → b a enter" (the return key)
//Find the matching sequence using the code above for each key in the Konami Code.
// Don't worry about capital a or b just check for lowercase.

// const keyInput = {
//     38: "up",
//     40: "down",
//     37: "left",
//     39: "right",
//     65: "a",
//     66: "b",
//     13: "return"
// };
//
// var codeSequence = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a", "return"];
// var codePosition = 0;
//
// $(document).keydown(function(event) {
//     var keys = keyInput[event.keyCode];
//     console.log(event.keyCode);
//     var keyStroke = codeSequence[codePosition];
//
//     if (keys === keyStroke) {
//         codePosition++;
//
//         if(codePosition === codeSequence.length) {
//             thirtyLives();
//             codePosition = 0;
//         }
//     } else {
//         codePosition = 0;
//     }
// });
// function thirtyLives() {
//     alert("cheater.");
//     // $(this).css("background-image", "url('/img/Dark_Souls.jpg')");
// }

var string="";
var konami="ArrowUpArrowDownArrowUpArrowDownArrowLeftArrowRightArrowLeftArrowRightab"
$(document).keyup(function(event){
    if (event.key==="ArrowUp"){
        string+=event.key;
        console.log(string)
    }
    if (event.key==="ArrowDown"){
        string+=event.key;
        console.log(string)
    }
    if (event.key==="ArrowLeft"){
        string+=event.key;
        console.log(string)
    }
    if (event.key==="ArrowRight"){
        string+=event.key;
        console.log(string)
    }
    if (event.key==="a"){
        string+=event.key;
        console.log(string)
    }
    if (event.key==="b"){
        string+=event.key;
        console.log(string)
    }
    if (string.includes(konami)){
        alert("cheater.");
        string=""
    }
});
