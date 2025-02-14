const popup = document.getElementById("popup")
const popupButton = document.getElementById("popup-btn")

popupButton.addEventListener("click", () => {
    popup.style.display = "none"
})
document.body.addEventListener("click", (event) => {
    if (popup.style.display !== "none") {
        popup.style.display = "none"
    }
})