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
  const toggle = document.getElementById("toggle");
  const toggleMenu = document.querySelector(".togglemenu");
  const icon = toggleMenu.querySelector("i");
  const menuBars = document.querySelectorAll(".menu-bars");

  nav.classList.toggle("show");
  toggle.classList.toggle("show");
  menuBars.forEach(element => {
    element.classList.toggle("show");
  });
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('toggle');

  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeIcon.textContent = '☼';
  } else {
    themeIcon.textContent = '☽';
  }
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('toggle');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☼';
  } else {
    themeIcon.textContent = '☽';
  }
});
document.addEventListener("scroll", function () {
  const section = document.querySelector("#connect");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add("visible");
  }
});