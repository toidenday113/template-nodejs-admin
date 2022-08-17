const { getView, decodeCookie} = require("../utils/function-utils");
const userModel = require('../models/User.model');

class HomeController{
    index(req, res, next){
        const idUser = decodeCookie(req).id;
        userModel.findOne(idUser).then(result=>{
            delete  result.password;
            res.render(getView('home.home'), {user: result});
        }).catch(error=> console.log(error.message));
    }

    react(req, res, next){
        res.render(getView('home.react'));
    }
}
const homeController = new HomeController();
module.exports = homeController;
