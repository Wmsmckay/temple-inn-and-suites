function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

const lastUpdate = `Last Updated ${document.lastModified}`;
const year = new Date().getFullYear();

document.querySelector("#last-updated").textContent = lastUpdate;
document.querySelector("#current-year").textContent = year;

const today = new Date();


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let wd = weekNames[today.getDay()]
let dd = String(today.getDate()).padStart(2, '0');
let mm = monthNames[today.getMonth()];
let yyyy = today.getFullYear();

const currentDate = `${wd}, ${mm} ${dd}, ${yyyy}`;

document.querySelector("#header-date").textContent = currentDate;


// display the banner on Monday and Tuesdays
if(wd === "Monday" || wd === "Tuesday") {
  document.getElementById("banner").style.display = "block";
}
else {
  document.getElementById("banner").style.display = "none";
}