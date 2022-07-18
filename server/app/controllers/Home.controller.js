const { getView } = require("../utils/function-utils");

class HomeController{
    index(req, res, next){
        res.render(getView('home.home'),{});
    }
}
const homeController = new HomeController();
module.exports = homeController;
