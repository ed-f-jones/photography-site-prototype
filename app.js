const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const navIcon = document.querySelectorAll(".nav-icon");

navBtn.addEventListener("click", ()=> {
    links.classList.toggle("show-links");
});


links.addEventListener("click", ()=> {
    links.classList.remove("show-links")
});
