const {getView, listCategoriesNew, menuCategories} = require("../utils/function-utils");
const categoryModel = require("../models/Category.model");

class CategoryController{
    index(req, res){
        categoryModel.findAll(['id', 'name', 'parent_id']).then(categories=>{
            let categoriesNew = listCategoriesNew(categories);
            res.render(
                getView('category.index'),
                {categories: categoriesNew}
            );
        }).catch();

    }

    postAddCategory(req, res){
      categoryModel.insert(req.body).then(result=>{
          if(result != null){
              res.status(200);
              res.redirect('/category');
          }
      })
    }
}
const categoryController = new CategoryController();

module.exports = categoryController;
