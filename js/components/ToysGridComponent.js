class ToysGridComponent {
    constructor() {
        this.htmlElement = document.createElement("div");
        this.state = {
            toys: [],
        };

        this.init();
    }

    saveData = (toys) => {
        this.state.toys = toys;
        this.render();
    };

    showError = (error) => {
        console.error(error);
    };

    init = () => {
        API.getToys(this.saveData, this.showError);
        this.render();
    };

    render = () => {
        if (this.state.toys.length === 0) {
            this.htmlElement.innerHTML = "nėra žaisliukų";
        } else {
            this.htmlElement.innerHTML =
                "<pre>" + JSON.stringify(this.state.toys) + "</pre>";
        }
    };
}
