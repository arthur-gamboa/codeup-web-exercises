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
$(".codeup").css("border", "1px solid red");



$("li").css("font-size", "20px");


$("h1, p, li").css("background-color", "lightgrey");
// this -^- is this same as all of these -v-
$("h1").css("background-color", "lightgrey");
$("p").css("background-color", "lightgrey");
$("li").css("background-color", "lightgrey");