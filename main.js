const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const modal = document.querySelector("#modal")

openBtn.addEventListener('click', () => {
    modal.show()
})
closeBtn.addEventListener('click', () => {
    modal.close()
})