const hamburger = document.querySelector("ul.");
const navMenu = document.querySelector("nav-wrapper." );

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})