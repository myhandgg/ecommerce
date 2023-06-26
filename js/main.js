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

// 