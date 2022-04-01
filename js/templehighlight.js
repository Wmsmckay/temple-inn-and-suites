// Randomly selects a temple an populates its data to the home page as a highlight.

const requestURL = "https://wmsmckay.github.io/temple-inn-and-suites/data/temples.json"

const highlight = document.querySelector(".temple-highlight");

fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
    //   console.table(jsonObject);
    const temples = jsonObject['temples'];

    i_random = Math.floor(Math.random() * temples.length);
    console.log(temples[i_random])
    displayTempleHighligh(temples[i_random]);
});


function displayTempleHighligh(temple) {
    let name = document.createElement('h2');
    let photo = document.createElement('img');
    let website = document.createElement('a');
    let history = document.createElement('ul');
    let lat = document.querySelector('#latitude');
    let lon = document.querySelector('#longitude');

    name.textContent = `${temple.name}`;
    photo.setAttribute('src', temple.photo);
    photo.setAttribute('alt', `Image of ${temple.name}`);
    photo.setAttribute('loading', 'lazy');
    website.setAttribute('href', temple.url);
    website.setAttribute('target', '_blank');
    
    // for (item in temple.history) {
    //     let li = document.createAttribute('li');
    //     li.textContent = `${item[0]}: ${item[1]}`
    //     history.appendChild(li)
    // };

    highlight.appendChild(lat);
    highlight.appendChild(lon);
    highlight.appendChild(photo);
    highlight.appendChild(name);
    // highlight.appendChild(history);
    highlight.appendChild(website);
    
}