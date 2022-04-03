const requestURL = "https://wmsmckay.github.io/temple-inn-and-suites/data/temples.json"
const cards = document.querySelector('#temple-cards');

fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
    // console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});

function createList(json_element, ) {
    let div = document.createElement('div');
    // let h4 = document.createElement('h4');
    // h4.innerHTML = title;
    // div.appendChild(h4);
    let list = document.createElement('ul');
    list.setAttribute('class', 'temple-highlight-text');
    for (item in json_element) {
        let li = document.createElement('li');
        li.textContent = json_element[item];
        // console.log(item);
        list.appendChild(li);
    };

    div.appendChild(list);
    // console.log(section);
    return div;
};

function createDropdown(title, content) {
    let div = document.createElement('div');
    div.setAttribute('class', 'dropdown');

    // let h4 = document.createElement('h4');
    // h4.innerHTML = title;
    // div.appendChild(h4);

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
    let services = createList("Services", temple.services);
    let o_schedule = document.createElement('p');
    let s_schedule = document.createElement('p');
    let c_schedule = createList(temple.closure_schedule);

    name.innerHTML = temple.name;
    address.innerHTML = temple.address;
    phone.innerHTML = temple.telephone;
    email.innerHTML = temple.email;
    o_schedule.innerHTML = `Ordinance Schedule: ${temple.ordinance_schedule}`;
    s_schedule.innerHTML = `Session Schedule: ${temple.session_schedule}`;
    c_schedule.innerHTML = `Closure Schedule: ${temple.closure_schedule}`;

    // Contact info
    let contact = document.createElement('div');
    // contact.
    contact.appendChild(address);
    contact.appendChild(email);
    contact.appendChild(phone);



    card.appendChild(photo);
    card.appendChild(name);
    card.appendChild(o_schedule);
    card.appendChild(s_schedule);
    // console.log(c_schedule);
    // console.log(createDropdown(c_schedule));
    card.appendChild(createDropdown("Closure Schedule", c_schedule));
    card.appendChild(createDropdown("Milestones", history));
    card.appendChild(createDropdown("Contact info", contact));


    // card.setAttribute('class', 'blue-box');

    // Put photo and front card info here.
    // flip_card_front.appendChild(photo);
    // flip_card_front.appendChild(name);
    // flip_card_front.appendChild(o_schedule);
    // flip_card_front.appendChild(s_schedule);

    // Put data on the back of card here;
    // flip_card_back.appendChild(c_schedule);
    // flip_card_back.appendChild(history);
    // flip_card_back.appendChild(services);
    // flip_card_back.appendChild(contact);
    
    

    // Combine card info into one item.
    // flip_card_inner.appendChild(flip_card_front);
    // flip_card_inner.appendChild(flip_card_back);
    // flip_card.appendChild(flip_card_inner);

    // flip_card_front.setAttribute('class','blue-box');
    // flip_card_back.setAttribute('class','blue-box');
    cards.appendChild(card);

};