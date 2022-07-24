const categoryController = require("../../controllers/Category.controller");
const categoryRouter = require('express').Router();

categoryRouter.get('/', categoryController.index);

module.exports = categoryRouter;