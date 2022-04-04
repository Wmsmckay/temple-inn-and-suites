let total_num_rooms = document.querySelector('#total-rooms');
total_num_rooms.innerHTML = 0;
// let final_total = document.querySelector('#num-rooms');
let total_num = 0;

let dropdown = document.createElement('div');

function total_rooms(funct) {
    

let section = document.querySelector('#rooms-section');
    
    if (funct === 'add') {
        section.appendChild(add_room(total_num + 1));
        total_num ++;

    }
    if (funct === 'subtract') {
        if (total_num > 0) {
            // total = total - 1;
            section.removeChild(section.lastChild);
            total_num --;
        }
    }
    // console.log(total_num);
    document.querySelector('#num-rooms').setAttribute('value', total_num);
    total_num_rooms.innerHTML = total_num;
}


function add_room(num) {
    let dropdown = document.createElement('section');
    dropdown.setAttribute('class', 'dropdown-rooms');
    let select = document.createElement('select');
    let title = document.createElement('span');
    title.innerHTML = `Room ${num} size: `;
    
    // Option 1
    let option1 = document.createElement('option');
    option1.setAttribute('value', 'none');
    option1.innerHTML = 'Please choose a room option';
    // option1.setAttribute('selected');
    select.appendChild(option1);

    // Option 2
    let option2 = document.createElement('option');
    option2.setAttribute('value', '1bed');
    option2.innerHTML = '1 Bed';
    select.appendChild(option2);

    // Option 3
    let option3 = document.createElement('option');
    option3.setAttribute('value', '2bed');
    option3.innerHTML = '2 Bed';
    select.appendChild(option3);


    dropdown.appendChild(title);
    dropdown.appendChild(select);
    // dropdown.appendChild(option1);
    return dropdown;
}

// <label class="">Home State</label>
// <select name="home-state" required>
//     <option value="none" selected disabled hidden>Please choose a state.</option>
//     <option value="AL">Alabama</option>