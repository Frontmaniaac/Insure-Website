const menuBtn = document.querySelector(".menu");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuEl = document.querySelectorAll(".sma")
menuBtn.addEventListener("click", () => {
    header.classList.toggle("activeHeader")
    nav.classList.toggle("activeNav")
    menuEl[0].classList.toggle("onTop");
    menuEl[1].classList.toggle("onMid");
    menuEl[2].classList.toggle("onBot");
    if (nav.classList.contains("activeNav")) {
        nav.style.display = "flex"
    } else {
        nav.style.display = "none"
    }

})