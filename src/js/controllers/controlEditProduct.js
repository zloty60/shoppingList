import productFormView from '../views/ProductFormView';
import product from '../models/Product';
import controlRenderCategoryOptions from './controlRenderCategoryOption';
import selectors from '../data/selectors';

function controlEditProduct(id) {
  controlRenderCategoryOptions(selectors.categorySelectEditJs);
  const productData = product.getProduct(id);
  productFormView.setProductName(productData.name);
  productFormView.setProductCategory(productData.category);
}

export default controlEditProduct;
