const userController = require("../../controllers/User.controller");
const userRouter = require('express').Router();

userRouter.get('/', userController.index);
userRouter.get('/:id', userController.EditUser);

module.exports = userRouter;