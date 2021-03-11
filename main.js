const burger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");
const img = document.querySelector(".section");

// hamburger toggle
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menuItems.classList.toggle("open");
    img.classList.toggle("opacity");
});

// mobile menu expand
expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
    });
});