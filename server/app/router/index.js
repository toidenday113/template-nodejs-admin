const homeController = require("../controllers/Home.controller");
const loginRouter = require("./login/Login.router");
const authMiddleware = require("../middlewares/Auth.middleware");

const initRouter = (app)=>{
    app.get("/", authMiddleware, homeController.index);
    app.use('/auth', loginRouter);
}
module.exports = initRouter;
