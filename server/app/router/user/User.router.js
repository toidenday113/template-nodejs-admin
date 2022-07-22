const userController = require("../../controllers/User.controller");
const userRouter = require('express').Router();

userRouter.get('/', userController.index);
userRouter.get('/edit/:id', userController.getViewEdit);
userRouter.get('/add', userController.getViewAdd);

userRouter.post('/add', userController.postAdd);


module.exports = userRouter;
