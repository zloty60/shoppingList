import selectors from '../data/selectors';

class ProductFormView {
  constructor() {
    this.productForm = document.querySelector(selectors.productForm);
  }

  addProductEvent(fn) {
    this.productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fn();
    });
  }

  getProductName() {
    return document.querySelector(selectors.productNameInput).value;
  }

  getCategoryValue() {
    return document.querySelector(selectors.categorySelect).value;
  }

  clearInput() {
    document.querySelector(selectors.productNameInput).value = '';
  }

  clearSelect(element) {
    document.querySelector(element).innerHTML = '';
  }

  renderCategoryOption(element, { displayTxt, category }) {
    const template = `<option value=${category}>${displayTxt}</option>`;
    document.querySelector(element).insertAdjacentHTML('beforeend', template);
  }

  setProductName(productName) {
    document.querySelector(selectors.productEditNameInputJs).value = productName;
  }

  setProductCategory(categoryName) {
    document.querySelector(selectors.categorySelectEditJs).value = categoryName;
  }
}

export default new ProductFormView();
