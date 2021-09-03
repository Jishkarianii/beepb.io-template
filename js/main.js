
// -------- Header on scroll ---------

const header = document.querySelector("header");

document.addEventListener("scroll", function() {
    if (scrollY > 150) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
})

// -------- Hamburger Menu ---------

const check = document.getElementById("check");
const headerOptions = document.querySelector(".header-options");

check.addEventListener("click", function() {
    if (check.checked) {
        headerOptions.style.top = "0px";
    } else {
        headerOptions.style.top = "-400px";
    }
})