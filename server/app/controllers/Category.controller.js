const {getView} = require("../utils/function-utils");

class CategoryController{
    index(req, res){
        res.render(getView('category.index'));
    }
}
const categoryController = new CategoryController();

module.exports = categoryController;
