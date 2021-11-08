class ToyCardComponent {
    constructor(props) {
        this.props = props;
        this.htmlElement = document.createElement('article');

        this.init();
    }

    init = () => {
        this.htmlElement.className = 'card p-3 shadow-sm'
        this.htmlElement.innerHTML = 'žaislo informacija'
    };

}
