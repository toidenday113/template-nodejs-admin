const {getView} = require("../utils/function-utils");
const categoryModel = require("../models/Category.model");

class CategoryController{
    index(req, res){
        categoryModel.findAll().then(categories=>{
            res.render(getView('category.index'), {categories: categories});
        }).catch();

    }
}
const categoryController = new CategoryController();

module.exports = categoryController;
