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

window.onload = function () {
  const progressBar = document.querySelector('.progress-bar');
  const progressBar1 = document.querySelector('.progress-bar-1');
  const progressBar2 = document.querySelector('.progress-bar-2');
  const progressBar3 = document.querySelector('.progress-bar-3');
  const progressBar4 = document.querySelector('.progress-bar-4');
  const progressBar5 = document.querySelector('.progress-bar-5');
  const progressBar6 = document.querySelector('.progress-bar-6');
  const progressBar7 = document.querySelector('.progress-bar-7');
  const progressBar8 = document.querySelector('.progress-bar-8');
  const progressBar9 = document.querySelector('.progress-bar-9');

  let progress = 0;
  const target = 96;

  let progress1 = 0;
  const target1 = 94;

  let progress2 = 0;
  const target2 = 85;

  let progress3 = 0;
  const target3 = 73;

  let progress4 = 0;
  const target4 = 70;

  let progress5 = 0;
  const target5 = 66;

  let progress6 = 0;
  const target6 = 44;

  let progress7 = 0;
  const target7 = 80;

  let progress8 = 0;
  const target8 = 36;

  let progress9 = 0;
  const target9 = 46;


  function updateProgress() {
    if (progress < target) {
      progress++;
      progressBar.style.width = progress + "%";
      progressBar.textContent = progress + "%";
      setTimeout(updateProgress, 150);
    }
    if (progress1 < target1) {
      progress1++;
      progressBar1.style.width = progress1 + "%";
      progressBar1.textContent = progress1 + "%";
    }
    if (progress2 < target2) {
      progress2++;
      progressBar2.style.width = progress2 + "%";
      progressBar2.textContent = progress2 + "%";
    }
    if (progress3 < target3) {
      progress3++;
      progressBar3.style.width = progress3 + "%";
      progressBar3.textContent = progress3 + "%";
    }
    if (progress4 < target4) {
      progress4++;
      progressBar4.style.width = progress4 + "%";
      progressBar4.textContent = progress4 + "%";
    }
    if (progress5 < target5) {
      progress5++;
      progressBar5.style.width = progress5 + "%";
      progressBar5.textContent = progress5 + "%";
    }
    if (progress6 < target6) {
      progress6++;
      progressBar6.style.width = progress6 + "%";
      progressBar6.textContent = progress6 + "%";
    }
    if (progress7 < target7) {
      progress7++;
      progressBar7.style.width = progress7 + "%";
      progressBar7.textContent = progress7 + "%";
    }
    if (progress8 < target8) {
      progress8++;
      progressBar8.style.width = progress8 + "%";
      progressBar8.textContent = progress8 + "%";
    }
    if (progress9 < target9) {
      progress9++;
      progressBar9.style.width = progress9 + "%";
      progressBar9.textContent = progress9 + "%";
    }
  }

  updateProgress();
};
document.addEventListener("scroll", function () {
  const section = document.querySelector("#connect");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add("visible");
  }
});