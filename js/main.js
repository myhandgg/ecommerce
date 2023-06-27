// bars
let ul = document.querySelector("header ul")
let overlay = document.querySelector(".overlay")

document.querySelector(".bars").onclick = open
document.querySelector(".close").onclick = close

function open() {
    ul.style.display = "flex"
    overlay.style.display = "block"
}

function close() {
    ul.style.display = "none"
    overlay.style.display = "none"
}

// cart

let cart = document.querySelector(".cart")
let cartContainer = document.querySelector(".cart-container")


cart.onclick = () => {
    cartContainer.classList.toggle("show")
}

// show products

let mainProduct = document.querySelector(".left-side .product")
let popupImg = document.querySelector(".left-side-overlay")

let leftArrow = document.querySelector(".prev")
let rightArrow = document.querySelector(".next")

let xMark = document.querySelector(".xmark")

mainProduct.onclick = () =>{
    popupImg.classList.add("show")
    overlay.classList.add("show")
    leftArrow.classList.add("show")
    rightArrow.classList.add("show")
}

xMark.onclick = () => {
    popupImg.classList.remove("show")
    overlay.classList.remove("show")
}