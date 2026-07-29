let lastScrollTop = 0;
const nav = document.querySelector('.menu');
const toggle = document.querySelector('#toggle');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= lastScrollTop) {
    nav.style.top = '100px';
    toggle.style.transform = 'translateY(0)';
  } else {
    nav.style.top = '-100px';
    toggle.style.transform = 'translateY(-100%)';
  }
});

function menutoggle() {
  const nav = document.querySelector("nav");
  const menuBars = document.querySelectorAll(".menu-bars");
  
  nav.classList.toggle("show");
  menuBars.forEach(element => {
    element.classList.toggle("show");
  });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const icon = body.classList.contains("dark-mode") ? "☼" : "☽";
    document.querySelector(".desktop-toggle").textContent = icon;
    localStorage.setItem(
        "theme",
        body.classList.contains("dark-mode") ? "dark" : "light"
    );
}
document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
    const icon = theme === "dark" ? "☼" : "☽";
    document.querySelector(".desktop-toggle").textContent = icon;
});

document.addEventListener("scroll", function () {
  const section = document.querySelector("#connect");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add("visible");
  }
});
