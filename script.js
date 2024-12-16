// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Loader Functionality
const loader = document.getElementById("loader");
const mainContent = document.getElementById("main-content");

window.addEventListener("load", () => {
    if (loader && mainContent) {
        loader.style.display = "none";
        mainContent.style.display = "block";
        mainContent.style.opacity = "1";
    }
});
