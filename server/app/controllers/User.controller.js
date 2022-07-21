const userModel = require("../models/User.model");
const {getView} = require("../utils/function-utils");

class UserController {
    index(req, res, next){
        userModel.findAll().then(result=>{
            res.render(getView('users.list-user'), {users: result});
        }).catch(err => console.log(err.message));
    }

    EditUser(req, res, next){
        const {id} = req.params;
        userModel.findOne(id).then(result=>{
            res.render(getView('users.edit-user'), {user: result});
        }).catch(err => console.log(err.message));
    }
}

const userController = new UserController();
module.exports = userController;
