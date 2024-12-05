// Header effect scroll

const header = document.querySelector(".header")
window.addEventListener("scroll", function() {
  if (window.scrollY > 1) {
    header.classList.add("sticky") 
  } else {
    header.classList.remove("sticky")
  }
  
})

// Navigation menu items active

window.addEventListener("scroll", function() {
  const section = this.document.querySelectorAll("section")
  const scrollY = this.window.scrollY

  section.forEach(function(current) {
    let sectionHight = current.offsetHeight
    let sectionTop = current.offsetTop - 50
    let sectionId = current.getAttribute("id")
    let navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`)

    if(navItem) {
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight) {
        navItem.classList.add("active") 
      } else {
      navItem.classList.remove("active")
      }
    }
  })
})

// Scroll to top button

const scrollToTop = document.querySelector(".scrollToTop")
window.addEventListener("scroll", function() {
  scrollToTop.classList.toggle("active", this.window.scrollY > 500)
})

scrollToTop.addEventListener("click", function() {
  document.body.scrollToTop = 0
  document.documentElement.scrollTop = 0
})

// Scroll Reveal Enable
// ScrollReveal().reveal( {scale: 1.5, delay: 200});

const revealConfiguration = [
  {selector: '.inner-title, .inner-subtitle', config: {opacity: 0, delay: 200}},
  {selector: '.home-info h1, .about-img', config: {delay: 500, origin: 'left'}},
  {selector: '.home-img, .description, .inner-info-link', config: {delay: 600, origin: 'right'}},
  {selector: '.skills-description, .work-exp-title, .services-description', config: {delay: 600, origin: 'top'}},
  {selector: '.media-icons a, .list-item, .inner-info-link', config: {delay: 700, origin: 'bottom', interval: 200}},
  {selector: '.education', config: {origin: 'top',delay: 600, interval: 300}},
  {selector: '.work-exp .experience-card, .services-container', config: {origin: 'top',delay: 600, interval: 300}},
  {selector: '.home-info h3, .home-info p, .home-info-link', config: {delay: 600, origin: 'left'}},
]

function initializeScrollReveal() {
  window.sr = ScrollReveal({
    reset: false,
    distance: "60px",
    duration: 2500,
    delay: 100
  })
  revealConfiguration.forEach(({selector, config}) => {
    sr.reveal(selector, config)
  })
}

initializeScrollReveal()

// Scroll Reveal Disable

function disableScrollReveal() {
  sr.clean() // Очистка всех элементов от анимации
  document.documentElement.style.overflowY = "hidden"
  document.body.style.overflowY = "hidden"

  revealConfiguration.forEach(({selector}) => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.transform = ""
      el.style.opacity = ""
      el.style.transition = ""
      el.style.visibility = ""
    })
  })
  console.log("function off")
}

// Функция повторной инициализации ScrollReveal

function enableScrollReveal() {
  document.documentElement.style.overflowY = ""
  document.body.style.overflowY = ""
  initializeScrollReveal()
  console.log("function work")
}

// Services section - Modal

const serviceModal = document.querySelectorAll(".service-modal")
const learnMoreBtn = document.querySelectorAll(".learn-more-btn")
const modalCloseBtn = document.querySelectorAll(".modal-close-btn")

const modal = function(modalClick) {
  serviceModal[modalClick].classList.add("active")
  disableScrollReveal()
}

learnMoreBtn.forEach((button, i) => {
  button.addEventListener("click", function() {
    modal(i)
  })
})

modalCloseBtn.forEach(button => {
  button.addEventListener("click", () => {
    serviceModal.forEach(modal => {
      modal.classList.remove("active")
    })
    enableScrollReveal()
  })
})


// Portfolio section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-modal")
const imgCard = document.querySelectorAll(".img-card")
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn")

const portfolioModal = function(modalClick) {
  portfolioModals[modalClick].classList.add("active")
}

imgCard.forEach((button, i) => {
  button.addEventListener("click", () => {
    portfolioModal(i)
  })
})

portfolioCloseBtn.forEach(button => {
  button.addEventListener("click", () => {
    portfolioModals.forEach(modalView => {
      modalView.classList.remove("active")
    })
  })
})

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
    prevEl: ".swiper-button-prev"
  },
});

// Responsive navigation menu toggle

const navBtn = document.querySelector(".nav-menu-btn")
const navBar = document.querySelector(".nav")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

navBtn.addEventListener("click", function() {
  navBtn.classList.toggle("close") 
  navBar.classList.toggle("active")
  navMenu.classList.toggle("active")
})

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    navBtn.classList.remove("close")
    navBar.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

