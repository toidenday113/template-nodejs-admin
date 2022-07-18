const express = require('express');
const authController = require('../../controllers/Auth.controller');
const authLoginMiddleware = require('../../middlewares/AuthLogin.middleware');
const loginRouter = express.Router();

loginRouter.get('/logout', authController.logout);
loginRouter.get('/login', authLoginMiddleware, authController.getLogin);
loginRouter.post('/login', authLoginMiddleware, authController.postLogin);


module.exports = loginRouter;
