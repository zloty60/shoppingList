import selectors from '../data/selectors';

class EditProductModal {
  getProductName() {
    return document.querySelector(selectors.productEditNameInputJs).value;
  }
}

export default new EditProductModal();
