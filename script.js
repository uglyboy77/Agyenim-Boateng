document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("page");
});
setTimeout(() => {
  const loading = document.getElementById('loading');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '1000';
    loading.style.display = 'none';
    main.style.zIndex = '3';
  }
}, 1000);

setTimeout(() => {
  const loading = document.getElementById('ack');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '1000';
    loading.style.display = 'none';
    main.style.zIndex = '1000';
  }
}, 5000);

const description = document.querySelector('.description');
const education = document.querySelector('.education');
const description1 = document.querySelector('.description-1');
const card = document.querySelectorAll('.card');
const workExperience = document.querySelector('.work-experience');
const awards = document.querySelector('.achievements');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('description')) {
        entry.target.classList.add('show');
      }
      if (entry.target.classList.contains('education')) {
        entry.target.classList.add('slide-in');
      }
      if (entry.target.classList.contains('description-1')) {
        entry.target.classList.add('show');
      }
      if (entry.target.classList.contains('card')) {
        entry.target.classList.add('show');
      }
      if (entry.target.classList.contains('work-experience')) {
        entry.target.classList.add('show');
      }
      if (entry.target.classList.contains('achievements'))
        entry.target.classList.add('show');
    }
  });
}, { threshold: 0.4 });

observer.observe(description);
observer.observe(description1);
card.forEach(c => observer.observe(c));
observer.observe(workExperience);
observer.observe(awards);
observer.observe(education);


let lastScrollTop = 0;
const nav = document.querySelector('.menu');
const toggle = document.querySelector('#toggle');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= lastScrollTop) {
    nav.style.top = '50px';
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
