const button = document.querySelector("button");
const closeIcon = document.querySelector(".close-icon");
const popupContainer = document.querySelector(".popup-container")


button.addEventListener("click", (e)=>{
    e.stopPropagation()
    popupContainer.classList.add("popup-open")
})

closeIcon.addEventListener("click", ()=>{
    popupContainer.classList.remove("popup-open")
})

window.addEventListener("click", ()=>{
    popupContainer.classList.remove("popup-open")
})























