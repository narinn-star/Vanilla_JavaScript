var chk1 = document.querySelector(".check1")
var chk2 = document.querySelector(".check2")
var chk3 = document.querySelector(".check3")
var modalform = document.querySelector(".modalform")
const DISPLAY = "hidden"
var result = ""
var modal_contents = document.querySelector(".modal_contents")

chk1.addEventListener("change", ()=>{
    if (chk1.checked){
        modalform.classList.remove(DISPLAY)
        result += chk1.value;
    }
    else {
        var n = result.indexOf("감자")
        var str1 = result.substring(0,n)
        var str2 = result.substring(n+2)
        result = str1 + str2
    }
    if (result != "")
    modal_contents.innerHTML=result + "이(가) 선택되었습니다."
    else {
        modal_contents.innerHTML=""
        modalform.classList.add(DISPLAY)
    }
})

chk2.addEventListener("click", ()=>{
    if (chk2.checked){
        modalform.classList.remove(DISPLAY)
        result += chk2.value;
    }
    else {
        var n = result.indexOf("고구마")
        var str1 = result.substring(0,n)
        var str2 = result.substring(n+3)
        result = str1 + str2
    }
    if (result != "")
    modal_contents.innerHTML=result + "이(가) 선택되었습니다."
    else {
        modal_contents.innerHTML=""
        modalform.classList.add(DISPLAY)
    }
})

chk3.addEventListener("click", ()=>{
    if (chk3.checked){
        modalform.classList.remove(DISPLAY)
        result += chk3.value;
    }
    else {
        var n = result.indexOf("호박")
        var str1 = result.substring(0,n)
        var str2 = result.substring(n+2)
        result = str1 + str2
    }
    if (result != "")
    modal_contents.innerHTML=result + "이(가) 선택되었습니다."
    else {
        modal_contents.innerHTML=""
        modalform.classList.add(DISPLAY)
    }
})