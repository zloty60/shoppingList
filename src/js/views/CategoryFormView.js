import selectors from '../data/selectors';

class CategoryFormView {
  constructor() {
    this.categoryForm = document.querySelector(selectors.categoryForm);
  }

  addCategoryEvent(fn) {
    this.categoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fn();
    });
  }

  getCategoryName() {
    return document.querySelector(selectors.categoryNameInput).value;
  }

  clearInput() {
    document.querySelector(selectors.categoryNameInput).value = '';
  }
}

export default new CategoryFormView();
