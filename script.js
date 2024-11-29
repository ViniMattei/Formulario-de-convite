const switchContainer = document.getElementById("switch")

switchContainer.addEventListener("click", (event) => {
  event.preventDefault()
  switchContainer.classList.toggle("active")
})
