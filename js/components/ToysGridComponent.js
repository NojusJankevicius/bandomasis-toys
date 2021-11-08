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
        this.htmlElement.className = "d-flex justify-content-center"
        this.render();
    };

    render = () => {
        if (this.state.toys.length === 0) {
            this.htmlElement.innerHTML = '<img src="assets/loading.gif" />'
        } else {
            this.htmlElement.innerHTML = ""
            const toysCardComponents = this.state.toys.map(cardProps => new ToyCardComponent(cardProps));
            const cardElements = toysCardComponents.map(component => component.htmlElement)
            this.htmlElement.append(...cardElements)
        }
    };
}
