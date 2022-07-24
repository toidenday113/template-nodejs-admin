const {getView} = require("../utils/function-utils");

class CategoryController{
    index(req, res){
        res.render(getView('category.list-category'));
    }
}
const categoryController = new CategoryController();

module.exports = categoryController;
