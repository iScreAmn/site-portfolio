// Services section - Modal

const serviceModal = document.querySelectorAll(".service-modal")
const learnMoreBtn = document.querySelectorAll(".learn-more-btn")
const modalCloseBtn = document.querySelectorAll(".modal-close-btn")

const modal = function(modalClick) {
  serviceModal[modalClick].classList.add("active")
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
  })
})