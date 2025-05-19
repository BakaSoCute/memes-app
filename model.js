const PREVIEW_MOCK = {
    url: "https://i.imgflip.com/1g8my4.jpg",
    textTop: "Верхняя подпись",
    textBott: "Нижняя подпись"
}


class Model {
    constructor() {
        this.memes = [];
        this.currentMemeId = null;
        this.preview = PREVIEW_MOCK;
    }


    getMemes() {
        return this.memes;
    }


    setMemes(memes) {
        this.memes = memes;
        this.currentMemeId = memes[0].id;
    }


    setCurrentMemId(currentMemeId) {
        this.currentMemeId = currentMemeId;
    }


    getCurrentMemeId() {
        return this.currentMemeId;
    }

    getPreview() {
        return this.preview;
    }

} 