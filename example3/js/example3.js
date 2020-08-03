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
var idetail1 = document.querySelector(".idetail1")
var idetail2 = document.querySelector(".idetail2")
var idetail3 = document.querySelector(".idetail3")

function HandlerBtn1(){
    menuform1.style.left = "0px"
    overlay.classList.remove("hidden")
}

function HandlerExit1(){
    menuform1.style.left = "-500px"
    idetail1.style.left = "-100px"
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
    idetail2.style.left = "-100px"
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
    idetail3.style.left = "-100px"
    overlay.classList.add("hidden")
}

Btn3.addEventListener("click", HandlerBtn3)
exit3.addEventListener("click",HandlerExit3)

function Handleridetail1(){
    menuform1.style.left = "0px"
    idetail1.style.left = "430px"
    idetail2.style.left = "400px"
    idetail3.style.left = "400px"
    overlay.classList.remove("hidden")
}

idetail1.addEventListener("click",Handleridetail1)

function Handleridetail2(){
    menuform2.style.left = "0px"
    idetail1.style.left = "400px"
    idetail2.style.left = "430px"
    idetail3.style.left = "400px"
    overlay.classList.remove("hidden")
}

idetail2.addEventListener("click",Handleridetail2)

function Handleridetail3(){
    menuform3.style.left = "0px"
    idetail1.style.left = "400px"
    idetail2.style.left = "400px"
    idetail3.style.left = "430px"
    overlay.classList.remove("hidden")
}

idetail3.addEventListener("click",Handleridetail3)