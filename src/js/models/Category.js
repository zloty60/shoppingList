import { v4 as uuidv4 } from 'uuid';
import { categoryList } from '../data/sampleProducts';

class Category {
  constructor() {
    this.categoryList = categoryList;
  }

  addCategory(categoryName) {
    this.categoryList.push({ displayTxt: categoryName, category: categoryName + uuidv4() });
  }

  checkIsCategoryNameIsUnique(categroyNameFromInput) {
    return this.categoryList.find((category) => category.displayTxt === categroyNameFromInput);
  }
}

export default new Category();
