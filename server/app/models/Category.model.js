class CategoryModel{
    category;
    constructor() {
        this.category = 'category';
    }

    findAll(col = []){
        return getTable(this.category).select(col);
    }

    findOne(id, col = []){
        return getTable(this.category).select(col).where('id', id);
    }

    insert(dataInsert){
        return getTable(this.category).insert(dataInsert);
    }
}
const categoryModel = new CategoryModel();
module.exports = categoryModel;
