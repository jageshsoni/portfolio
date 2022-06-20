//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Skills section
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () => {
  if (!skillsPlayed) skillsCounter();
});

//Skills progress bar animation

function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;
  // console.log(window.innerHeight);
  if (window.innerHeight >= topPosition + el.offsetHeight-100) return true;
  return false;
}
// console.log(topPosition);

function updateCount(num, maxNum) {
  let currentNum = +num.innerText;

  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 30);
  }
}

let skillsPlayed = false;

function skillsCounter() {
  if (!hasReached(first_skill)) return;

  skillsPlayed = true;

  sk_counters.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeValue = 427 - 427 * (target / 100);

    progress_bars[i].style.setProperty("--target", strokeValue);

    setTimeout(() => {
      updateCount(counter, target);
    }, 400);
  });

  // progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out"));
  Array.from(progress_bars).forEach((p) => {
    p.style.animation = "progress 2s ease-in-out forwards";
    p.style.animationDelay = "1s";
  });
}

//Education
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    const target = document.getElementById(tab.dataset.target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification-active');
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});


//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");
  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");
// console.log(savedTheme);
// themeBtn.addEventListener("click", () => {
//   console.log(savedTheme+" "+savedIcon);
// });

if(savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
// const navItems = document.querySelectorAll("nav-items a");
const navItems = document.querySelector('#nav-items-id').querySelectorAll('.nav-items a');

menuBtn.addEventListener("click", () => {
  if(!navigation.classList.contains("active")){
    navigation.classList.add("active");
  }
  else{
    navigation.classList.remove("active");
  }
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
}); 

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn, .section-subtitle-qual', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.sub-heading, .heading', { delay: 600, origin: 'top' });
ScrollReveal().reveal('.box-desc', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.skills-wrap', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn, .skill-box', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons, .contact-left li', {delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.contact-card, .contact-left h2', {delay: 500, origin: 'left' });
ScrollReveal().reveal('.qualification-sections, .img-card', {delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.qualification-tabs', {delay: 800, origin: 'top', interval: 200 });
ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top', interval: 200 });