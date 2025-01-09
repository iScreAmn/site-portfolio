// Header effect scroll

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Navigation menu items active

window.addEventListener("scroll", function () {
  const section = this.document.querySelectorAll("section");
  const scrollY = this.window.scrollY;

  section.forEach(function (current) {
    let sectionHight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");
    let navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`);

    if (navItem) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHight) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
  });
});

// Scroll to top button

const scrollToTop = document.querySelector(".scrollToTop");
window.addEventListener("scroll", function () {
  scrollToTop.classList.toggle("active", this.window.scrollY > 500);
});

scrollToTop.addEventListener("click", function () {
  document.body.scrollToTop = 0;
  document.documentElement.scrollTop = 0;
});

// Scroll Reveal Enable
// ScrollReveal().reveal( {scale: 1.5, delay: 200});

const revealConfiguration = [
  {
    selector: ".inner-title, .inner-subtitle",
    config: { opacity: 0, delay: 200 },
  },
  {
    selector: ".home-info h1, .about-img, .contact-card .title",
    config: { delay: 100, origin: "left" },
  },
  {
    selector: ".circle, .home-img, .description, .inner-info-link",
    config: { delay: 100, origin: "right" },
  },
  {
    selector:
      ".skills-description, .work-exp-title, .services-description, .contact-right p, .contact-left h2",
    config: { delay: 600, origin: "top" },
  },
  {
    selector: ".media-icons a, .list-item, .inner-info-link",
    config: { delay: 100, origin: "bottom", interval: 200 },
  },
  {
    selector: ".education",
    config: { origin: "top", delay: 100, interval: 300 },
  },
  {
    selector:
      ".work-exp .experience-card, .services-container, .portfolio-img-card, .contact-list li, .first-row, .second-row, .third-row",
    config: { origin: "top", delay: 100, interval: 300 },
  },
  {
    selector: ".home-info h3, .home-info p, .home-info-link",
    config: { delay: 100, origin: "left" },
  },
];

function initializeScrollReveal() {
  window.sr = ScrollReveal({
    reset: false,
    distance: "60px",
    duration: 2500,
    delay: 100,
  });
  revealConfiguration.forEach(({ selector, config }) => {
    sr.reveal(selector, config);
  });
}

initializeScrollReveal();

// Scroll Reveal Disable

function disableScrollReveal() {
  sr.clean(); // Очистка всех элементов от анимации
  document.documentElement.style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";

  revealConfiguration.forEach(({ selector }) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.transform = "";
      el.style.opacity = "";
      el.style.transition = "";
      el.style.visibility = "";
    });
  });
  // console.log("function off")
}

// Функция повторной инициализации ScrollReveal

function enableScrollReveal() {
  document.documentElement.style.overflowY = "";
  document.body.style.overflowY = "";
  initializeScrollReveal();
  // console.log("function work")
}

// Services section - Modal

const serviceModal = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

const modal = function (modalClick) {
  serviceModal[modalClick].classList.add("active");
  disableScrollReveal();
};

learnMoreBtn.forEach((button, i) => {
  button.addEventListener("click", function () {
    modal(i);
  });
});

modalCloseBtn.forEach((button) => {
  button.addEventListener("click", () => {
    serviceModal.forEach((modal) => {
      modal.classList.remove("active");
    });
    enableScrollReveal();
  });
});

// Portfolio section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCard = document.querySelectorAll(".img-card");
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn");

const portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
  disableScrollReveal();
};

imgCard.forEach((button, i) => {
  button.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtn.forEach((button) => {
  button.addEventListener("click", () => {
    portfolioModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
    enableScrollReveal();
  });
});

// SLIDER

const swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Responsive navigation menu toggle

const navBtn = document.querySelector(".nav-menu-btn");
const navBar = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("close");
  navBar.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navBtn.classList.remove("close");
    navBar.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// DARK THEME

const themeBtn = document.querySelector(".theme-btn");
// Функция для получения текущей темы
const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";

// Функция для получения текущего значка
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

// Слушатель событий для переключения темы
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

// Применяем сохраненную тему и значок

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Login

/**
 * Variables
 */
const signupButton = document.getElementById("signup-button"),
  loginButton = document.getElementById("login-button"),
  userForms = document.getElementById("user_options-forms");

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
  },
  false
);

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
  },
  false
);

// Digital section

particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "#", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
