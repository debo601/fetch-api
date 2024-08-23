// const apiURL = 'https://swapi.dev/api/people/'

// fetch

// let promise = new Promise((resolve, reject => {
//     console.log('I am a Promise')
// }))

// let promise = new Promise((resolve, reject) => {
//     console.log("I AM A PROMISE");
//     // resolve("success");
//     reject("some error occured");
// });


// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4000)
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 4000)
//     });
// }

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2....");
// let p2 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         resolve("success");
//         // reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// promise.catch((err) => {
//     console.log("rejected");
// })


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     });
// }


// async function fetchData() {
//     try {
//         const response = await fetch('https://swapi.dev/api/people/');
//         const data = await response.json();
//         const transformedData = data.map(item => ({
//             name: item.name,
//             height: item.height,
//             gender: item.gender
//         }));
//         console.log(transformedData);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// fetchData();




// async function fetchAndDisplayPeople() 
document.getElementById('fetchButton').addEventListener('click', async function () {


    try {
        // Fetch data from the API
        const response = await fetch('https://swapi.dev/api/people/');

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const data = await response.json();

        // Extract the results (array of people) from the data
        const people = data.results;

        // Use the map method to transform the first 3 people
        const peopleInfo = people.slice(0, 3).map(person => {
            return {
                name: person.name,
                height: person.height
            };
        });

        // Display the transformed data
        peopleInfo.forEach(person => {
            console.log(`Name: ${person.name}, Height: ${person.height}`);
        });
        
    } catch (error) {
        console.error('Error:', error);
    }
});

// Call the function to fetch and display the people data
fetchAndDisplayPeople();