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
    })
    .then(function(){
        let script = document.createElement('script');
        script.src = './js/weatherapi.js';
        document.body.appendChild(script);

});


function displayTempleHighligh(temple) {
    // let name = document.createElement('h2');
    let name = document.querySelector('#temple-highlight-title');
    // let photo = document.createElement('img');
    let photo = document.querySelector('#temple-highlight-img');
    // let website = document.createElement('a');
    // let templehistory = document.createElement('section');
    let templehistory = document.querySelector('#temple-highlight-section');
    // let milestones = document.createElement('h3');
    let milestones = document.querySelector('#temple-section-title');
    let lat = document.querySelector('#latitude');
    let lon = document.querySelector('#longitude');

    name.textContent = `${temple.name}`;
    photo.setAttribute('src', temple.photo);
    photo.setAttribute('alt', `Image of ${temple.name}`);
    // photo.setAttribute('loading', 'lazy');
    // website.setAttribute('href', temple.url);
    // website.setAttribute('target', '_blank');

    lat.innerHTML = temple.location['latitude'];
    lon.innerHTML = temple.location['longitude'];
    
    
    // let list = document.createElement('ul');
    let list = document.querySelector('.temple-highlight-text')
    list.setAttribute('class', 'temple-highlight-text');

    for (item in temple.history) {
        let li = document.createElement('li');
        li.textContent = temple.history[item];
        // console.log(item);
        list.appendChild(li);
    };

    
    milestones.textContent = "Milestones";
    templehistory.appendChild(milestones);
    templehistory.appendChild(list)

    // highlight.appendChild(lat);
    // highlight.appendChild(lon);
    // highlight.appendChild(photo);
    // highlight.appendChild(name);
    
    // highlight.appendChild(templehistory);
    // highlight.appendChild(website);
    
}

