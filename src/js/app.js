import productFormView from './views/ProductFormView';
import categoryFormView from './views/CategoryFormView';
import controlProductForm from './controllers/controlProductForm';
import controlRenderProducts from './controllers/controlRenderProducts';
import controlRenderCategoryOptions from './controllers/controlRenderCategoryOption';
import controlAddCategory from './controllers/controlAddCategory';
import selectors from './data/selectors';

function appInit() {
  productFormView.addProductEvent(controlProductForm);
  categoryFormView.addCategoryEvent(controlAddCategory);
  controlRenderProducts();
  controlRenderCategoryOptions(selectors.categorySelect);
}

appInit();
