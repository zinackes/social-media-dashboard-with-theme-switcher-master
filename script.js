var header = document.querySelector(".header")
var title = document.querySelector(".title")
var background = document.querySelector("body")
var box = document.querySelectorAll(".content")
var number = document.querySelectorAll(".content > h1")
var box2 = document.querySelectorAll(".content_")
var number2 = document.querySelectorAll(".content_ > h1")
var slider = document.querySelector(".slider")

function Mode(checkbox){

    if(checkbox.checked){
        header.classList.add("header-light");
        background.style.backgroundColor = "white";
        title.classList.add("title-light");
        for (const content of box){
            content.classList.add("content-light");
        }
        for (const h1 of number){
            h1.classList.add("number-light");
        }
        for (const content_ of box2){
            content_.classList.add("content_-light");
        }
        for (const h1 of number2){
            h1.classList.add("number-light");
        }
    }
    else{
        header.classList.remove("header-light");
        background.removeAttribute("style");
        title.classList.remove("title-light");
        for (const content of box){
            content.classList.remove("content-light");
        }
        for (const h1 of number){
            h1.classList.remove("number-light");
        }
        for (const content_ of box2){
            content_.classList.remove("content_-light");
        }
        for (const h1 of number2){
            h1.classList.remove("number-light");
        }
    }
}