import product from '../models/Product';
// eslint-disable-next-line import/no-cycle
import controlRenderProducts from './controlRenderProducts';

function controlDeleteProduct(id) {
  product.deleteProduct(id);
  controlRenderProducts();
}

export default controlDeleteProduct;
