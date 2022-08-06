class CategoryModel{
    category;
    constructor() {
        this.category = 'category';
    }

    findAll(){
        return getTable(this.category).select();
    }
}
const categoryModel = new CategoryModel();
module.exports = categoryModel;