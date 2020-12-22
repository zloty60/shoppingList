import { sampleProducts } from '../data/sampleProducts';

class Product {
  constructor() {
    this.products = sampleProducts;
  }

  _calculateIndex(id) {
    const index = this.products.findIndex((product) => product.id === id);
    return index;
  }

  addProduct(name, id, category) {
    this.products.push({ name, id, category });
  }

  deleteProduct(id) {
    const index = this._calculateIndex(id);
    this.products.splice(index, 1);
  }

  checkProduct(id) {
    const index = this._calculateIndex(id);
    this.products[index].isCheck = !this.products[index].isCheck;
  }

  updateProduct(id, name, category) {
    const index = this._calculateIndex(id);
    this.products[index].name = name;
    this.products[index].category = category;
  }

  getProduct(id) {
    const index = this._calculateIndex(id);
    return this.products[index];
  }
}

export default new Product();
