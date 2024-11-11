const circle = document.querySelector(".circle")

const moveHandler = () => {
    circle.classList.add("move")
}

circle.addEventListener("click"  , moveHandler)