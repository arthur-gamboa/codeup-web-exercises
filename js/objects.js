(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // var person = Object();
    // person.firstName = "Arthur";
    // person.lastName = "Gamboa";
    // console.log(person.firstName);
    // console.log(person.lastName);
    var person = {
        firstName: "Arthur",
        lastName: "Gamboa"
    }
    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from " + person.firstName +  " " + person.lastName + ".";
    }
    console.log(person.sayHello());
    //or//
    // var person1 = {firstName: "Arthur", lastName: "Gamboa"};
    // function sayHello(person) {
    //     return "Hello, " + person.firstName + " " + person.lastName + ".";
    // }
    // console.log(sayHello(person));


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
// shoppers.forEach(function(shopper) {
//     var total = 0;
//     var discount = shopper.amount * .12;
//     if (shopper.amount > 200) {
//         total = shopper.amount - discount;
//         console.log(shopper.name + "'s total before discount: $" + shopper.amount + ". The discount: $" + discount + ". Amount after discount: $" + total + ".");
//     } else {
//         console.log(shopper.name + " owes: $ " + shopper.amount + ". No discount.");
//     }
// })
    shoppers.forEach(function(shopper) {
        if(shopper.amount > 200) {
            console.log(shopper.name + "'s total before discount: " + shopper.amount.toFixed(2) + ". After discount: " + (shopper.amount * .88));
        } else {
            console.log(shopper.name + "'s total before discount: " + shopper.amount.toFixed(2) + ". No discount.");
        }
    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Hobbit",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien"
            }
        },
        {title: "The Box Man", author: {firstName: "Kobo", lastname: "Abe"}},
        {title: "A Song of Ice and Fire", author: {firstName: "George", lastName: "Martin"}},
        {title: "Little Big Man", author: {firstName: "Thomas", lastName: "Berger"}},
        {title: "Voyage in the Dark", author: {firstName: "Jean", lastName: "Rhys"}}
        ]
        console.log(books[0].title)
        console.log(books[1].author.firstName)
        console.log(books[2].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     */
    // books.forEach(function(book) {
    //     console.log(book);
    // })
    function showBookInfo(book) {
        var str = "Title: " + book.title + "\n";
        str += "Author: " + book.author.firstName + " " + book.author.lastName;
        return str;
    }

    books.forEach(function(book, index) {
        console.log("Book # " + (index + 1) + "\n" + showBookInfo(book));
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var showBookInfo = function(title, author) {
        var obj = {};
        var authorArr = author.split(" ");
        obj.title = title;
        obj.author = {};
        obj.author.firstName = authorArr[0];
        obj.author.lastName = authorArr[1];
        return obj;
    }


})();