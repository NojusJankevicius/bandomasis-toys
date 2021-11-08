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

    wrapChild =(htmlElement) => {
        const wrapper = document.createElement('div')
        wrapper.className = 'col-12 col-sm-6 col-lg-3'
        wrapper.append(htmlElement);
        return wrapper;
    }

    init = () => {
        API.getToys(this.saveData, this.showError);
        this.htmlElement.className = "row g-3 justify-content-center"
        this.render();
    };

    render = () => {
        if (this.state.toys.length === 0) {
            this.htmlElement.innerHTML = '<img class="w-25" src="assets/loading.gif" />'
        } else {
            this.htmlElement.innerHTML = ""
            const toysCardComponents = this.state.toys.map(cardProps => new ToyCardComponent(cardProps));
            const cardElements = toysCardComponents.map(component => component.htmlElement)
            const wrappedElements = cardElements.map(this.wrapChild)
            this.htmlElement.append(...wrappedElements)
        }
    };
}
