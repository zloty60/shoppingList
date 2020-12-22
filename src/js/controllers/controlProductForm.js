import { v4 as uuidv4 } from 'uuid';
import productFormView from '../views/ProductFormView';
import product from '../models/Product';
import controlRenderProducts from './controlRenderProducts';
import NotificationView from '../views/NotificationView';
import selectors from '../data/selectors';

function controlProductForm() {
  const productName = productFormView.getProductName();
  const categoryValue = productFormView.getCategoryValue();
  const id = uuidv4();
  product.addProduct(productName, id, categoryValue);
  productFormView.clearInput();
  const notificationView = new NotificationView(
    selectors.notificationProductWrapperJs,
    'delete-product-notification-js'
  );
  notificationView.clearNotificationHtml();
  notificationView.renderNotification(`Pomyślnie dodano produkt ${productName}`);
  notificationView.deleteNotificationEvent();
  controlRenderProducts();
}

export default controlProductForm;
