import category from '../models/Category';
import categoryFormView from '../views/CategoryFormView';
import controlRenderCategoryOption from './controlRenderCategoryOption';
import NotificationView from '../views/NotificationView';
import selectors from '../data/selectors';
import controlRenderProducts from './controlRenderProducts';

function controlAddCategory() {
  const categoryName = categoryFormView.getCategoryName().trim();
  if (!category.checkIsCategoryNameIsUnique(categoryName)) {
    category.addCategory(categoryName);
    const notificationView = new NotificationView(
      selectors.notificationCategoryWrapperJs,
      'delete-category-notification-js'
    );
    notificationView.clearNotificationHtml();
    notificationView.renderNotification(`Pomyślnie dodano kategorię ${categoryName}`);
    notificationView.deleteNotificationEvent();
    controlRenderCategoryOption(selectors.categorySelect);
    controlRenderProducts();
  } else {
    const notificationView = new NotificationView(selectors.notificationWrapperJs);
    notificationView.clearNotificationHtml();
    notificationView.renderNotification(`Kategoria ${categoryName} już istnieję`, 'danger');
    notificationView.deleteNotificationEvent();
  }
  categoryFormView.clearInput();
}

export default controlAddCategory;
