const screen = document.querySelector(".big_image")
const button = document.querySelector(".button")
let box = document.querySelectorAll(".box")
box = Array.from(box)

box.forEach(imgFunc => {
    imgFunc.addEventListener("click", (e) => {
        if (e.target.classList.contains("main_img")) {
            screen.src = `${e.target.src}`
            console.log("Bosildi");
        }
        else if (e.target.classList.contains("button")) {
            e.target.parentElement.parentElement.style.display = "none" 
            console.log("Green Light");  
        }
    })
})