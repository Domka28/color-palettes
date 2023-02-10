class ColorBlock {
    constructor(data) {
        this.colorHex = data
    }

    getNewColorHtml() {
        return `
        <div>
        <p class="color" data-color=${this.colorHex} style="background-color:${this.colorHex};" </p>
        <p class="color-name" data-color=${this.colorHex}> ${this.colorHex}</p>
        </div>`
    }
}

export default ColorBlock