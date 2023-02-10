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
            // console.log(data)
            allColors.innerHTML = ''
            colorsArray = data.colors
            for (let color of colorsArray) {
                const colorBlock = new ColorBlock(color.hex.value)
                // console.log(colorBlock)
                allColors.innerHTML += colorBlock.getNewColorHtml()
            }
        })
}
render("F55A5A", "monochrome")

document.addEventListener("click", function (e) {
    if (e.target.classList.contains('color')) {
        navigator.clipboard.writeText(e.target.dataset.color)
    } else if (e.target.classList.contains('color-name')) {
        navigator.clipboard.writeText(e.target.textContent)

    }

})

