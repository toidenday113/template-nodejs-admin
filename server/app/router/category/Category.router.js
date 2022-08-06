const categoryController = require("../../controllers/Category.controller");
const categoryRouter = require('express').Router();

categoryRouter.get('/', categoryController.index);
categoryRouter.post('/add', categoryController.postAddCategory);


module.exports = categoryRouter;
