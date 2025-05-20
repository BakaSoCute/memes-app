class Controller {
    constructor () {
        this.model = new Model({
            onMemesChange: this.handleModelMemesChange,
            onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
            onTextTopChange: this.handleModelTextTopChange,
            onTextBottomChange: this.handleModelTextBottomChange
        });
        this.viev = new Viev({
            onMemeChange: this.handleMemeChange,
            onTextTopChange: this.handleVievTextTopChange,
            onTextBottomChange: this.handleVievTextBottomChange
        });
        this.api = new API();
    }
    init() {
        this.api.getMemes()
            .then(data => {
                const memes = data.data.memes;
                this.model.setMemes(memes);

            })


    }
    handleModelMemesChange = () => {
        this.viev.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());
        
    }

    handleMemeChange = (id) => {
        this.model.setCurrentMemId(id);        
    }

    handleModelCurrentMemeIdChange = () => {
        this.viev.renderPreview(this.model.getPreview());
    }
    handleVievTextTopChange = (text) => {
        this.model.setTextTop(text);
    }
    handleVievTextBottomChange = (text) => {
        this.model.setTextBottom(text);
    }
    handleModelTextTopChange = () => {
        this.viev.renderPreview(this.model.getPreview());
    }
    handleModelTextBottomChange = () => {
        this.viev.renderPreview(this.model.getPreview());
    }
}