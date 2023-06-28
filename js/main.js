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

// moving imgaes

let changeImg = document.querySelector(".left-side-overlay .product")

let imgOne = "images/image-product-1.jpg"
let imgTwo = "images/image-product-2.jpg"
let imgThree = "images/image-product-3.jpg"
let imgFour = "images/image-product-4.jpg"

let images = [imgOne , imgTwo , imgThree , imgFour]

let count = 0

let thumbnail = document.querySelectorAll("#popup-thumbnails img")
let mainThumbnail = document.querySelectorAll("#main-thumbnails img")

let productOne = document.querySelector("#main-thumbnails .product-one")
let productTwo = document.querySelector("#main-thumbnails .product-two")
let productThree = document.querySelector("#main-thumbnails .product-three")
let productFour = document.querySelector("#main-thumbnails .product-four")

productOne.onclick = () => {
    mainThumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    productOne.classList.add("active")
    mainProduct.src = imgOne
}

productTwo.onclick = () => {
    mainThumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    productTwo.classList.add("active")
    mainProduct.src = imgTwo
}

productThree.onclick = () => {
    mainThumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    productThree.classList.add("active")
    mainProduct.src = imgThree
}

productFour.onclick = () => {
    mainThumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    productFour.classList.add("active")
    mainProduct.src = imgFour
}

rightArrow.onclick = moveRight
leftArrow.onclick = moveLeft

function moveRight() {
    count++
    if (count === images.length) {
        count = 0
    }
    changeImg.src = images[count]
    thumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    thumbnail[count].classList.add("active")
    mainThumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    mainThumbnail[count].classList.add("active")
    mainProduct.src = images[count]
}

function moveLeft() {
    count--
    if (count < 0) {
        count = images.length - 1
    }
    changeImg.src = images[count]
    thumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    thumbnail[count].classList.add("active")
    mainThumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    mainThumbnail[count].classList.add("active")
    mainProduct.src = images[count]
}

function mobileMoveRight() {
    count++
    if (count === images.length) {
        count = 0
    }
    mainProduct.src = images[count]
    thumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    thumbnail[count].classList.add("active")
    mainProduct.src = images[count]
}

function mobileMoveLeft() {
    count--
    if (count < 0) {
        count = images.length - 1
    }
    mainProduct.src = images[count]
    thumbnail.forEach((e) =>{
        e.classList.remove("active")
    })
    thumbnail[count].classList.add("active")
    mainProduct.src = images[count]
}

// buying section

let minus = document.querySelector(".minus")
let amount = document.querySelector(".number-of-products p")
let plus = document.querySelector(".plus")

minus.onclick = function() {
    amount.innerHTML = amount.innerHTML - 1
    if (+amount.innerHTML <= 0) {
        amount.innerHTML = 0
    }
}

plus.onclick = function() {
    amount.innerHTML = +amount.innerHTML + 1
}