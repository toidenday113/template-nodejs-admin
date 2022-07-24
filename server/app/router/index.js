const homeController = require("../controllers/Home.controller");
const loginRouter = require("./login/Login.router");
const authMiddleware = require("../middlewares/Auth.middleware");
const userRouter = require("./user/User.router");
const categoryRouter = require("./category/Category.router");

const initRouter = (app)=>{
    app.get("/", authMiddleware, homeController.index);
    app.use('/auth', loginRouter);
    app.use('/user', authMiddleware, userRouter);
    app.use('/category', authMiddleware, categoryRouter);
}
module.exports = initRouter;
