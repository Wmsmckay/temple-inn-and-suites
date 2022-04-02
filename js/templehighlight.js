// Randomly selects a temple an populates its data to the home page as a highlight.

const requestURL = "https://wmsmckay.github.io/temple-inn-and-suites/data/temples.json"

const highlight = document.querySelector(".temple-highlight");

fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
    const temples = jsonObject['temples'];

    i_random = Math.floor(Math.random() * temples.length);
    displayTempleHighligh(temples[i_random]);
});


function displayTempleHighligh(temple) {
    let name = document.createElement('h2');
    let photo = document.createElement('img');
    let website = document.createElement('a');
    let templehistory = document.createElement('section');
    let lat = document.querySelector('#latitude');
    let lon = document.querySelector('#longitude');

    name.textContent = `${temple.name}`;
    photo.setAttribute('src', temple.photo);
    photo.setAttribute('alt', `Image of ${temple.name}`);
    photo.setAttribute('loading', 'lazy');
    website.setAttribute('href', temple.url);
    website.setAttribute('target', '_blank');

    lat.innerHTML = temple.location['latitude'];
    lon.innerHTML = temple.location['longitude'];
    
    
    let list = document.createElement('ul');
    list.setAttribute('class', 'temple-highlight-text')

    for (item in temple.history) {
        let li = document.createElement('li');
        li.textContent = temple.history[item];
        // console.log(item);
        list.appendChild(li);
    };

    let milestones = document.createElement('h3');
    milestones.textContent = "Milestones";
    templehistory.appendChild(milestones);
    templehistory.appendChild(list)

    highlight.appendChild(lat);
    highlight.appendChild(lon);
    highlight.appendChild(photo);
    highlight.appendChild(name);
    
    highlight.appendChild(templehistory);
    highlight.appendChild(website);
    
}

let script = document.createElement('script');
script.src = './js/weatherapi.js';
document.body.appendChild(script);