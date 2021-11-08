const rootContainer = document.querySelector("#root");

const toysGrid = new ToysGridComponent();

rootContainer.append(toysGrid.htmlElement);

// setTimeout(() => {
//     toysGrid.deleteToy('5210dfx')
// }, 3000);