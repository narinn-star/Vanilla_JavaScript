var Btn1 = document.querySelector(".b1")
var Btn2 = document.querySelector(".b2")
var Btn3 = document.querySelector(".b3")
var menuform1 = document.querySelector(".menuform1")
var menuform2 = document.querySelector(".menuform2")
var menuform3 = document.querySelector(".menuform3")
var overlay = document.querySelector(".overlay")
var exit1 = document.querySelector(".exit1")
var exit2 = document.querySelector(".exit2")
var exit3 = document.querySelector(".exit3")

function HandlerBtn1(){
    menuform1.style.left = "0px"
    overlay.classList.remove("hidden")
}

function HandlerExit1(){
    menuform1.style.left = "-500px"
    overlay.classList.add("hidden")
}

Btn1.addEventListener("click",HandlerBtn1)
exit1.addEventListener("click",HandlerExit1)

function HandlerBtn2(){
    menuform2.style.left = "0px"
    overlay.classList.remove("hidden")
}

function HandlerExit2(){
    menuform2.style.left = "-500px"
    overlay.classList.add("hidden")
}

Btn2.addEventListener("click", HandlerBtn2)
exit2.addEventListener("click",HandlerExit2)

function HandlerBtn3(){
    menuform3.style.left = "0px"
    overlay.classList.remove("hidden")
}

function HandlerExit3(){
    menuform3.style.left = "-500px"
    overlay.classList.add("hidden")
}

Btn3.addEventListener("click", HandlerBtn3)
exit3.addEventListener("click",HandlerExit3)
