class Controller {
    constructor () {
        this.model = new Model({
            onMemesChange: this.handleModelMemesChange,
            onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange
        });
        this.viev = new Viev({
            onMemeChange: this.handleMemeChange
        });
        this.api = new API();
    }
    init() {

        const memes = this.api.getMemes();
        this.model.setMemes(memes);

    }
    handleModelMemesChange = () => {
        this.viev.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());
        
    }

    handleMemeChange = (id) => {
        this.model.setCurrentMemId(id);        
    }

    handleModelCurrentMemeIdChange = () => {
        const preview = {
            ...this.model.getPreview(),
            url: this.model.getCurrentMeme().url
        }

        this.viev.renderPreview(preview);
    }
}