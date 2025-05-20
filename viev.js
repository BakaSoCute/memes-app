class Viev {
    constructor ({onMemeChange}) {
        this.previewTopTextNode = document.getElementById("textTop");
        this.previewBottTextNode = document.getElementById("textBott");
        this.previewImgNode = document.getElementById("img");
        this.settingsSelectNode = document.getElementById("select");
        this.onMemeChange = onMemeChange;

        this.settingsSelectNode.addEventListener("change", this._handleSelectChange)

    }
    renderPreview(preview) {
        const {
            url,
            textTop,
            textBott
        } = preview;
        this.previewBottTextNode.innerText = textBott;
        this.previewTopTextNode.innerText = textTop;
        this.previewImgNode.src = url;
    }
    renderMemesSelect(memes, currentMemeId) {
        memes.forEach(meme => {
            const {
                id,
                name
            } = meme;

            const optionNode = document.createElement("option");
            optionNode.setAttribute("value", id);
            optionNode.innerText = name;
            if (id === currentMemeId) {
                optionNode.setAttribute("selected", true);

            }
           
            this.settingsSelectNode.appendChild(optionNode);
        });
    }

    _handleSelectChange = () => {
        const id = this.settingsSelectNode.value;
        this.onMemeChange(id);
    }
}