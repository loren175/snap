const navDisplay = document.querySelector(".nav-display")
const navMenu = document.querySelector(".nav-menu")

navDisplay.addEventListener("click", () => {
  navDisplay.classList.toggle('active')
  navMenu.classList.toggle('active')
})