// 1. Create a sample promise that:
// Resolves to current time
// Prints received time in console when resolved (in then())

// let promise = new Promise(function (resolve, reject) {
//     resolve(new Date())

// })
//     .then(date => {
//         console.log(date)
//     })



// 2. Create a console app that:
// Creates 100 promises;
// Each promise has its own ID (0..99);
// Each promise is resolved after a random time interval (up to 500ms);
// After being resolved, each promise will log its id in the console.


// for (let i = 0; i < 101; i++) {
//     new Promise(function (resolve, reject) {
//         let random = parseInt(Math.floor(Math.random() * 500));
//         let ID = i;
//         setTimeout(() => {
//             resolve({ ID: ID, random: random })
//         }, random)


//     })
//         .then((ID) => {
//             console.log(ID)
//         })
// }

//3. Modify the app so it prints an ID of the promise that is completed first.

let firstPromise = [];
for (let i = 0; i < 101; i++) {
    let promise = new Promise(function (resolve, reject) {
        let random = parseInt(Math.floor(Math.random() * 500));
        let ID = i;
        setTimeout(() => {
            resolve({ ID: ID, random: random })
        }, random)


    })
        .then(data => {
            console.log(data.ID)
            return data.ID

        })
    firstPromise.push(promise)

}
let lastPromise = Promise.race(firstPromise).then(data => console.log('first id: ' + data))




