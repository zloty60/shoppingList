import product from '../models/Product';
// eslint-disable-next-line import/no-cycle
import controlRenderProducts from './controlRenderProducts';

function controlCheckProduct(id) {
  product.checkProduct(id);
  controlRenderProducts();
}

export default controlCheckProduct;
