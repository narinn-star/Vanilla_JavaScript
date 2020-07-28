var Btn1 = document.querySelector(".b1")
var menuform = document.querySelector(".menuform")
var overlay = document.querySelector(".overlay")
var exit = document.querySelector(".exit")

function HandlerBtn1(){
    menuform.style.left = "0px"
    overlay.classList.remove("hidden")
}

function HandlerExit(){
    menuform.style.left = "-500px"
    overlay.classList.add("hidden")
}

Btn1.addEventListener("click",HandlerBtn1)
exit.addEventListener("click",HandlerExit)