

const URL = "https://swapi.dev/api/people/";
const btn = document.querySelector('#btn');
const mainContainer = document.getElementById('container');

// document.querySelector("card-title").style.background = "red";
const cardTitle = document.querySelector('.card-title');

// Change the font style
if (cardTitle) {
    cardTitle.style.fontFamily = 'Arial, sans-serif'; // Example font style
    cardTitle.style.fontWeight = 'bold'; // Example font weight
    cardTitle.style.fontSize = '24px'; // Example font size
    cardTitle.style.color = 'red'; // Example font color
}

const imgsURLs = [
    {
        'Luke Skywalker': 'images/luke2.jpeg'
    },
    {
        'C-3PO': 'images/c3po.jpg'
    },
    {
        'R2-D2': 'images/R2D2.jpeg'
    },
    {
        'Darth Vader': 'images/darthvedar2.jpeg'
    }
]
const getJsonData = fetch(URL).then(response => {
    return response.json();
}).then(data => {
    return data.results;
}).catch(err => {

});

btn.addEventListener("click", async function () {
    const jsonData = await getJsonData;
    createDataCards(jsonData);
});

function createDataCards(data) {
    const firstCard = document.getElementById('firstCard');
    firstCard.remove();

    for (let i = 0; i < 4; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');

        let cardbody = document.createElement('div');
        cardbody.setAttribute('class', 'card-body');
        card.appendChild(cardbody);

        let img = document.createElement('img');
        let nameInfo = data[i].name;

        img.setAttribute('src', imgsURLs[i][nameInfo]);
        img.setAttribute('class', 'img-fluid');
        cardbody.appendChild(img);

        let nameHeading = document.createElement('h1');
        nameHeading.innerHTML = "<i>Name:</i> " + data[i].name;
        cardbody.appendChild(nameHeading);

        let heightParagraph = document.createElement('p');
        heightParagraph.innerHTML = "<i>Height:</i> " + data[i].height + "cm";
        cardbody.appendChild(heightParagraph);

        let skinColor = document.createElement('p');
        skinColor.innerHTML = "<i>Color:</i> " + data[i].skin_color;
        cardbody.appendChild(skinColor);

        let mass = document.createElement('p');
        skinColor.innerHTML = "<i>Mass:</i> " + data[i].mass;
        cardbody.appendChild(mass);

        let hairColor = document.createElement('p');
        hairColor.innerHTML = "<i>Hair:</i> " + data[i].hair_color;
        cardbody.appendChild(hairColor);

        // let skinColor = document.createElement('h3');
        // skinColor.innerHTML = "<i>Color:</i> " + data[i].skin_color;
        // cardbody.appendChild(skinColor);

        // let skinColor = document.createElement('h3');
        // skinColor.innerHTML = "<i>Color:</i> " + data[i].skin_color;
        // cardbody.appendChild(skinColor);








        mainContainer.appendChild(card);
    }

}

