/* eslint-disable import/no-cycle */
import product from '../models/Product';
import category from '../models/Category';
import productView from '../views/ProductView';
import selectors from '../data/selectors';
import controlDeleteProduct from './controlDeleteProduct';
import controlCheckProduct from './controlCheckProduct';
import controlEditProduct from './controlEditProduct';

function controlRenderProducts() {
  productView.clearProductsView();
  category.categoryList.forEach((category) => {
    productView.renderCategoryHeader(category);
  });

  product.products.forEach((product) => {
    productView.renderSingleProduct(product);
  });

  document.querySelectorAll(selectors.productItem).forEach((product) => {
    const id = product.dataset.productId;
    const deleteBtn = product.querySelector(selectors.deleteIcon);
    const checkBtn = product.querySelector(selectors.checkIcon);
    const editBtn = product.querySelector(selectors.editIcon);
    productView.deleteProductEvent(deleteBtn, id, controlDeleteProduct);
    productView.addEvent(checkBtn, id, controlCheckProduct);
    productView.addEvent(editBtn, id, controlEditProduct);
  });
}

export default controlRenderProducts;
