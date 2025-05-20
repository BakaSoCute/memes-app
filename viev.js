class Viev {
    constructor ({onMemeChange, onTextTopChange, onTextBottomChange}) {
        this.previewTopTextNode = document.getElementById("textTop");
        this.previewBottTextNode = document.getElementById("textBottom");
        this.textTopInputNode = document.getElementById("input-up");
        this.textBottomInputNode = document.getElementById("input-down");

        this.previewImgNode = document.getElementById("img");
        this.settingsSelectNode = document.getElementById("select");

        this.onMemeChange = onMemeChange;
        this.onTextTopChange = onTextTopChange;
        this.onTextBottomChange = onTextBottomChange;

        this.settingsSelectNode.addEventListener("change", this._handleSelectChange);
        this.textTopInputNode.addEventListener("input", this._handleTextTopChange);
        this.textBottomInputNode.addEventListener("input", this._handleTextBottomChange);


    }
    renderPreview(preview) {
        const {
            url,
            textTop,
            textBottom
        } = preview;
        this.previewBottTextNode.innerText = textBottom;
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
    _handleTextTopChange = (event) => {
        this.onTextTopChange(event.target.value);
    }
    _handleTextBottomChange = (event) => {
        this.onTextBottomChange(event.target.value);
    }
}