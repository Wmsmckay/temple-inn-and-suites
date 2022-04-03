const requestURL = "https://wmsmckay.github.io/temple-inn-and-suites/data/temples.json"
const cards = document.querySelector('#temple-cards');

fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.foreach(displayTemples);

});


function displayTemples(temple) {
    let name = document.createElement('h2');
    let photo = document.createElement('img');
    // let website = document.createElement('a');
    let templehistory = document.createElement('section');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('ul');
    let history = document.createElement('ul');
    let o_schedule = document.createElement('p');
    let s_schedule = document.createElement('p');
    let c_schedule = document.createElement('ul');

    name.innerHTML = temple.name;
    address.innerHTML = temple.address;
    phone.innerHTML = temple.phone;
    email.innerHTML = temple.email;
    // o_schedule.innerHTML = temple.

};