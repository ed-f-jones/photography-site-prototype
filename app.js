const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const navIcon = document.querySelectorAll(".nav-icon");
const scrollLinks = document.querySelectorAll(".scroll-link");

navBtn.addEventListener("click", ()=> {
    links.classList.toggle("show-links");
});


scrollLinks.forEach(link => {
    links.addEventListener("click", e => {
        e.preventDefault();
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - 62;
        window.scrollTo({
            left: 0,
            //top: element.offset,
            top: position,
            behavior: "smooth"
        });
    });
});
