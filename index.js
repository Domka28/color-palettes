import ColorBlock from "./ColorBlock.js"

let colorsArray = []
const colorBtn = document.getElementById("color-btn")
const colorPlace = document.getElementById("color-place")
const selectPlace = document.getElementById("select-place")
const allColors = document.getElementById("all-colors")

colorBtn.addEventListener("click", function () {
    const hex = colorPlace.value.slice(1, 7)
    const mode = selectPlace.value.toLowerCase()
    render(hex, mode)
})


function render(hex, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            allColors.innerHTML = ''
            colorsArray = data.colors
            for (let color of colorsArray) {
                const colorBlock = new ColorBlock(color.hex.value)
                allColors.innerHTML += colorBlock.getNewColorHtml()
            }
        })
}
render("F55A5A", "monochrome")

document.addEventListener("click", function (e) {
    if (e.target.dataset.color) {
        navigator.clipboard.writeText(e.target.dataset.color)
        Toastify({
            style: {
                background: "#3D4B60",
                color: "#D5D4D8"

            },
            text: "Copied!",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            offset: {
                x: 10,
                y: 100
            },
        }).showToast();
    }

})

