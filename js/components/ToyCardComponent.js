class ToyCardComponent {
    constructor(props) {
        this.props = props;
        this.htmlElement = document.createElement('article');

        this.init();
    }

    init = () => {
        const {id, title, price, ageRestrictions, discount, imgSrc} = this.props
        this.htmlElement.className = 'card p-3 shadow-sm'
        this.htmlElement.innerHTML = `
        <h2>${title}</h2>
        <img class="w-25" src="${imgSrc}" alt="">
        <ul>`
            if(ageRestrictions !== null) this.htmlElement.innerHTML +=`
            <li>
            <strong>Age restriction</strong>:
            <span>${ageRestrictions.from}</span>
            </li>`;
        this.htmlElement.innerHTML +=`
            <li>
                <strong>price</strong>:
                <span>${price.amount} ${price.currency}</span>
            </li>`
            if(discount.amount !== null) this.htmlElement.innerHTML +=`
            <li>
                <strong>discounted price</strong>:
                <span>${price.amount - (price.amount / 100 * discount.amount)} ${price.currency}</span>
            </li>
                `;
                this.htmlElement.innerHTML +=`
            </ul>
        <button class="btn btn-danger position-absolute top-0 end-0 mt-3 me-3">⨉</button>
        `
    };

}
