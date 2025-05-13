class Controller {
    constructor () {
        this.model = new Model();
        this.viev = new Viev();
        this.api = new API();
    }
    init() {
        const preview = this.model.getPreview();

        this.viev.render(preview)
    }
}