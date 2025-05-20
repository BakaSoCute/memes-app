const PREVIEW_MOCK = {
    textTop: "Верхняя подпись",
    textBott: "Нижняя подпись"
}


class Model {
    constructor({onCurrentMemeIdChange,onMemesChange}) {
        this.memes = [];
        this.currentMemeId = null;
        this.preview = PREVIEW_MOCK;
        this.onMemesChange = onMemesChange;
        this.onCurrentMemeIdChange = onCurrentMemeIdChange;
    }


    getMemes() {
        return this.memes;
    }


    setMemes(memes) {
        this.memes = memes;
        this.currentMemeId = memes[0].id;

        this.onMemesChange();
        this.onCurrentMemeIdChange();
    }


    setCurrentMemId(currentMemeId) {
        this.currentMemeId = currentMemeId;

        this.onCurrentMemeIdChange();
    }


    getCurrentMemeId() {
        return this.currentMemeId;
    }

    getPreview() {
        return this.preview;
    }
    getCurrentMeme() {
        let currentMeme = null;
        this.memes.forEach(meme => {
            if (meme.id === this.getCurrentMemeId()) {
                currentMeme = meme
            }
        })
        return currentMeme;
    }

} 