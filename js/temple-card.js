const requestURL = "https://wmsmckay.github.io/temple-inn-and-suites/data/temples.json"
const cards = document.querySelector('#temple-cards');

fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});

function createList(json_element) {
    let div = document.createElement('div');
    let list = document.createElement('ul');
    list.setAttribute('class', 'temple-highlight-text');
    for (item in json_element) {
        let li = document.createElement('li');
        li.textContent = json_element[item];
        list.appendChild(li);
    };

    div.appendChild(list);
    return list;
};

function createDropdown(title, content) {
    let div = document.createElement('div');
    div.setAttribute('class', 'dropdown');

    let dropbtn = document.createElement('button');
    dropbtn.setAttribute('class', 'dropbtn');
    dropbtn.innerHTML = title;
    let dropdown_content = document.createElement('div');
    dropdown_content.setAttribute('class', 'dropdown-content');

    dropdown_content.appendChild(content);

    div.appendChild(dropbtn);
    div.appendChild(dropdown_content);

    return div;
};


function displayTemples(temple) {
    let card = document.createElement('div');
    card.setAttribute('class', 'temple-card');
    

    let name = document.createElement('h2');
    let photo = document.createElement('img');
    photo.setAttribute('src', temple.photo);
    photo.setAttribute('alt', temple.name);
    let history = createList(temple.history);
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = createList(temple.services);
    let o_schedule = document.createElement('p');
    let s_schedule = document.createElement('p');
    let c_schedule = createList(temple.closure_schedule);

    templeId = (temple.name).replace(/\s/g, '-');
    let likeid = `${templeId}-likeid`;


    let likebtn = document.createElement('i');
    likebtn.setAttribute('class', 'fa fa-thumbs-up');
    likebtn.setAttribute('onclick', 'toggleLike(this.id)');
    let likes = document.createElement('section');
    likes.setAttribute('class', 'likes');
    let likeCount = document.createElement('p');
    likeCount.setAttribute('id', likeid);
    likebtn.setAttribute('id', templeId);

    let like_value_name = `${likeid}-likeCounter`;

    const like_value = window.localStorage.getItem(like_value_name);
    if(like_value === undefined) {
        like_value = 0;
        window.localStorage.setItem(like_value_name, 0);
    }

    likeCount.innerHTML = like_value;


    likes.appendChild(likebtn);
    likes.appendChild(likeCount);

    name.innerHTML = temple.name;
    address.innerHTML = temple.address;
    phone.innerHTML = temple.telephone;
    email.innerHTML = temple.email;
    o_schedule.innerHTML = `Ordinance Schedule: ${temple.ordinance_schedule}`;
    s_schedule.innerHTML = `Session Schedule: ${temple.session_schedule}`;

    // Contact info
    let contact = document.createElement('div');
    contact.appendChild(address);
    contact.appendChild(email);
    contact.appendChild(phone);



    card.appendChild(photo);
    card.appendChild(name);

    card.appendChild(likes);
    card.appendChild(o_schedule);
    card.appendChild(s_schedule);
    card.appendChild(createDropdown("Services", services));
    card.appendChild(createDropdown("Closure Schedule", c_schedule));
    card.appendChild(createDropdown("Milestones", history));
    card.appendChild(createDropdown("Contact info", contact));

    cards.appendChild(card);

};