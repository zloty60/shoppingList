import productFormView from '../views/ProductFormView';
import category from '../models/Category';

function controlRenderCategoryOption(element) {
  productFormView.clearSelect(element);
  category.categoryList.forEach((categoryEl) => {
    productFormView.renderCategoryOption(element, categoryEl);
  });
}

export default controlRenderCategoryOption;
