var header = document.querySelector(".header")
var title = document.querySelector(".title")
var background = document.querySelector("body")
var box = document.querySelectorAll(".content")
var number = document.querySelectorAll(".content > h1")
var boxtwo = document.querySelectorAll(".content_")
var numbertwo = document.querySelectorAll(".content_ > h1")
var slider = document.querySelector(".slider")

function Mode(checkbox){

    if(checkbox.checked){
        header.classList.add("header-light");
        background.style.backgroundColor = "white";
        title.classList.add("title-light");
        for  (let i = 0; i < box.length; i++){
            box[i].classList.add("content-light");
            number[i].classList.add("number-light");
        }
        for (let i = 0; i < boxtwo.length; i++){
            boxtwo[i].classList.add("content_-light");
            numbertwo[i].classList.add("number-light");
        }
    }
    else{
        header.classList.remove("header-light");
        background.removeAttribute("style");
        title.classList.remove("title-light");
        for  (let i = 0; i < box.length; i++){
            box[i].classList.remove("content-light");
            number[i].classList.remove("number-light");
        }
        for (let i = 0; i < boxtwo.length; i++){
            boxtwo[i].classList.remove("content_-light");
            numbertwo[i].classList.remove("number-light");
        }
    }
}