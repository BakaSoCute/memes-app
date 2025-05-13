class Viev {
    constructor () {
        this.previewTopTextNode = document.getElementById("textTop");
        this.previewBottTextNode = document.getElementById("textBott");
        this.previewImgNode = document.getElementById("img");

    }
    render(preview) {
        const {
            url,
            textTop,
            textBott
        } = preview;
        this.previewBottTextNode.innerText = textBott;
        this.previewTopTextNode.innerText = textTop;
        this.previewImgNode.src = url;
    }
}