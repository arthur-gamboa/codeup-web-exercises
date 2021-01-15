// 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

    const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// let threeOrMore = users.filter(function(lang) {
//     return lang.languages.length >= 3;
// });

let three = users.filter(lang => lang.languages.length >= 3);
console.log(three);

// 3. Use .map to create an array of strings where each element is a user's email address.

// let mapEmail = users.map(e => e.email.toString());

let emailStr = users.map(e => e.email);
console.log(emailStr);

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// let exp = users.reduce((total, user) => {
//     return total + user.yearsOfExperience / users.length;
// }, 0);

let exp = users.reduce((total, user) => total + user.yearsOfExperience / users.length, 0);
console.log(exp);

// 5. Use .reduce to get the longest email from the list of users.

// function longestEmail(input) {
//     const high = input.reduce(function(a, b) {
//         if ((a.email.length) > (b.email.length)) {
//             return a;
//         } else {
//             return b;
//         }
//     })
//     return high;
//
// }
// console.log(longestEmail(users));

// let longestEmail = users.reduce((currentLongest, user) => user.email.length > currentLongest.email.length ? user : currentLongest, users[0]);
let longestEmail = users.reduce((current, other) => current.email.length > other.email.length ? current: other, users[0]);
console.log(longestEmail);

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userString = users.reduce((listOfNames, user) => listOfNames === "" ? "Your instructors are: " + user.name : listOfNames + ", " + user.name, "");

// let userString = users.reduce((names, user) => {
//     return [...names, user.name];
// }, []);
// let newString = userString.join(" ");
console.log(userString);