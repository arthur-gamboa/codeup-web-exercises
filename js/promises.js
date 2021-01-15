// fetch('https://api.github.com/users', {headers: {"Authorization": githubToken}})

const url = "https://api.github.com/users/"
const events = "/events"

const lastCommitDate = (username) => {
    let token = `token ${githubToken}`;
    console.log(token);
    return fetch(url + username + events, {headers: {"Authorization": token}})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data.filter(event => event.type === "PushEvent")
        })
        .then(pushEvents => {
            console.log(pushEvents[0].created_at);
            return pushEvents[0].created_at;
        })
}

console.log(lastCommitDate("arthur-gamboa"));

const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));
wait(5000).catch(() => console.log("When will we see this?"));

// let lastCommitPromise = lastCommitDate("arthur-gamboa")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         return data.filter(event => event.type === "PushEvent")
//     })
//     .then(pushEvents => {
//         console.log(pushEvents[0].created_at);
//     })





//******************* Promise Lecture *******************//

// const getGithubUsernames = () => {
//     return fetch("https://api.github.com/users")
//         .then(response => response.json);
// }
//
// getGithubUsernames().then(users => {
//     console.log(users.length)
//     users.forEach(userObj => {
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));


//******************* Curriculum Material *******************//


// const myPromise = fetch("https://api.github.com/users");
// myPromise.then(function(response) {
//     console.log(response);
// })
// myPromise.catch(function(error) {
//     console.error(error);
// })

// Promise.resolve("one").then(function(one) {
//     console.log(one);
//     return "two";
// }).then(function(two) {
//     console.log(two);
//     return "three";
// }).then(function(three) {
//     console.log(three);
// })

// fetch('https://api.github.com/users').then(response => {
//     response.json().then(users => {
//         users.forEach(user => {
//             console.log(user.login);
//         })
//     })
//         .catch(error => console.error(error))
// });

// const myPromise = new Promise(function(resolve, reject) {
//     if (Math.random() > .3) {
//         resolve();
//     } else {
//         reject();
//     }
// }, 1500);
//
// console.log(myPromise); // pending promise
//
// myPromise.then(() => console.log("resolved"));
// myPromise.catch(() => console.log("rejected"));

