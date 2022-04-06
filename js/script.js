function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

const lastUpdate = `Last Updated ${document.lastModified}`;
const year = new Date().getFullYear();

document.querySelector("#last-updated").textContent = lastUpdate;