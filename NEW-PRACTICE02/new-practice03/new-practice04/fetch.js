// const apiEndPoint = "https://swapi.dev/api/people/";
// const display = document.querySelector("#display-data");
// const loadButton = document.querySelector("#load-data");
// const prevButton = document.querySelector("#prev-data")
// const nextPage = document.querySelector("#next-page");
// const pagination = document.querySelector("#pagination")



// let currentURL = apiEndPoint; //URL to fetch the current page
// let prevURL = null;
// let nextURL = null;
// let isLoading = null;


// const imageMap = {
//     "Luke SkyWalker": "./images/starwars.jpg",
//     "C-3PO": "https://via.placeholder.com/150?text=C-3PO"

// }


// const getData = async () => {
//     const res = await fetch(apiEndPoint);
//     const data = await res.json();
//     return data.results;

// }


// const displayUsers = async () => {
//     const payload = await getData();

//     let dataDisplay = payload.map((object) => {
//         const { name, height, mass, hair_color, skin_color, eye_color, birth_year } = object;


//         return `
//         <div class="col-md-4 mb-4"> 
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">${name}</h5>
//                 <p class="card-text"><strong>Height:</strong> ${height} cm</p>
//                 <p class="card-text"><strong>Mass:</strong> ${mass} kg</p>
//                 <p class="card-text"><strong>Hair Color:</strong> ${hair_color}</p>
//                 <p class="card-text"><strong>Skin Color:</strong> ${skin_color}</p>
//                 <p class="card-text"><strong>Eye Color:</strong> ${eye_color}</p>
//                 <p class="card-text"><strong>Birth Year:</strong> ${birth_year}</p>

//             </div>
//         </div>
//     </div>
//     `;
//     }).join('');


//     display.innerHTML = dataDisplay;
// }

// loadButton.addEventListener("click", displayUsers);

const apiEndPoint = "https://swapi.dev/api/people/";
const display = document.querySelector("#display-data");
const loadButton = document.querySelector("#load-data");
const prevPage = document.querySelector("#prev-page");
const nextPage = document.querySelector("#next-page");
const pagination = document.querySelector("#pagination");


let currentURL = apiEndPoint;
let prevURL = null;
let nextURL = null;
let isLoading = false;

const imageMap = {
    "Luke Skywalker": "./images/luke2.jpeg",
    "C-3PO": "./images/c3po.jpg",
    "R2-D2": "./images/R2D2.jpeg",
    "Darth Vader": "./images/darthvader2.jpeg",
    "Leia Organa": "./images/Leia Organa.jpg",
    "Owen Lars": "./images/owenlars.avif",
    "Beru Whitesun lars": "./images/Leia Organa.jpg",
    "R5-D4": "./images/Leia Organa.jpg",
    "Biggs Darklighter": "./images/Leia Organa.jpg",
    "Obi-Wan Kenobi": "./images/biggsdark.webp",

};

const getData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        prevURL = data.previous;
        nextURL = data.next;
        return data.results;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

const displayUsers = async () => {
    if (isLoading) return;
    isLoading = true;

    const payload = await getData(currentURL);

    let dataDisplay = payload.map((object) => {
        const { name, height, mass, hair_color, skin_color, eye_color, birth_year } = object;
        const imageUrl = imageMap[name] || 'https://via.placeholder.com/150?text=No+Image';

        return `
        <div class="col-md-4 mb-4"> 
            <div class="card">
                <img src="${imageUrl}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text"><strong>Height:</strong> ${height} cm</p>
                    <p class="card-text"><strong>Mass:</strong> ${mass} kg</p>
                    <p class="card-text"><strong>Hair Color:</strong> ${hair_color}</p>
                    <p class="card-text"><strong>Skin Color:</strong> ${skin_color}</p>
                    <p class="card-text"><strong>Eye Color:</strong> ${eye_color}</p>
                    <p class="card-text"><strong>Birth Year:</strong> ${birth_year}</p>
                </div>
            </div>
        </div>
        `;






    }).join('');

    display.innerHTML = dataDisplay;
    updatePagination();
    isLoading = false;
};

const updatePagination = () => {
    pagination.innerHTML = '';

    const createPageItem = (url, label, isDisabled, isActive) => `
        <li class="page-item ${isDisabled ? 'disabled' : ''} ${isActive ? 'active' : ''}">
            <a class="page-link" href="#" data-url="${url}">${label}</a>
        </li>
    `;

    // Previous page link
    pagination.innerHTML += createPageItem(prevURL, '&laquo;', !prevURL, false);

    // Next page link
    pagination.innerHTML += createPageItem(nextURL, '&raquo;', !nextURL, false);

    // Attach click events to pagination links
    pagination.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', handlePaginationClick);
    });
};

const handlePaginationClick = async (e) => {
    e.preventDefault();
    const url = e.target.getAttribute('data-url');
    if (url && url !== '#') {
        currentURL = url;
        await displayUsers();
    }
};

// Load initial data
const loadInitialData = async () => {
    currentURL = apiEndPoint;
    await displayUsers();
};

loadButton.addEventListener("click", loadInitialData);

// Load initial data when the page is ready
document.addEventListener("DOMContentLoaded", loadInitialData);
