/* eslint-disable prettier/prettier */
import selectors from '../data/selectors';

class ProductView {
  renderSingleProduct({ name, id, category, isCheck }) {
    const markup = `<li class="list-group-item d-flex justify-content-between align-items-center product-item-js" data-product-id=${id} >
                      <span class='${isCheck ? 'text-decoration-line-through' : 'text-decoration-none'}'>${name}</span>
                      <div>
                        <button type="button" class="btn btn-danger btn-floating me-3 delete-icon-js">
                          <i class="fas fa-trash-alt "></i>
                        </button>
                        <button   data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal" type="button" class="btn btn-warning  btn-floating me-3 edit-icon-js">
                          <i class="fas fa-pen"></i>
                        </button>
                        <button type="button" class="btn btn-primary  btn-floating me-3 check-icon-js">
                          <i class="fas fa-check"></i>
                        </button>
                      </div>
                    </li>`;
    document.querySelector(`#${category}`).insertAdjacentHTML('beforeend', markup);
  }

  renderCategoryHeader({ category, displayTxt }) {
    const markup = `<div class="mt-2">
    <div class="card border">
      <div class="card-header bg-dark">
        <span class="text-light text-capitalize">${displayTxt}</span>
      </div>
      <ul id=${category} class="list-group list-group-flush">
      </ul>
    </div>
    </div>`;
    document.querySelector(selectors.productsListWrapper).insertAdjacentHTML('beforeend', markup);
  }

  deleteProductEvent(element, id, fn) {
    element.addEventListener('click', () => {
      fn(id);
    });
  }

  addEvent(element, id, fn) {
    element.addEventListener('click', () => {
      fn(id);
    });
  }

  clearProductsView() {
    document.querySelector(selectors.productsListWrapper).innerHTML = '';
  }
}

export default new ProductView();
