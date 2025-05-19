class Controller {
    constructor () {
        this.model = new Model();
        this.viev = new Viev();
        this.api = new API();
    }
    init() {

        const memes = this.api.getMemes();
        this.model.setMemes(memes);
        this.model.setCurrentMemId(memes[0].id)

        this.viev.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());

        const preview = this.model.getPreview();

        this.viev.renderPreview(preview)
    }
}