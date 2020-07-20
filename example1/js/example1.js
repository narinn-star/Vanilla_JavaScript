var onBtn = document.querySelector(".on")
var exitBtn = document.querySelector(".exit")
var overlay = document.querySelector(".overlay")
var modalform = document.querySelector(".modalform")
const DISPLAY = "hidden"

onBtn.addEventListener("click",()=>{
    overlay.classList.remove(DISPLAY)
    modalform.classList.remove(DISPLAY)
    onBtn.innerHTML = "<b>C L I C K E D</b>"
})

exitBtn.addEventListener("click", ()=>{
    overlay.classList.add(DISPLAY)
    modalform.classList.add(DISPLAY)
    onBtn.innerHTML = "<b>C L I C K</b>"
})