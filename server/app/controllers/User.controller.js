const userModel = require("../models/User.model");
const {getView} = require("../utils/function-utils");
const typeUser = require('../constants/type-user');
class UserController {
    index(req, res, next){
        userModel.findAll().then(result=>{
            res.render(getView('users.list-user'), {users: result});
        }).catch(err => console.log(err.message));
    }

    getViewEdit(req, res, next){
        const {id} = req.params;
        userModel.findOne(id).then(result=>{
            res.render(getView('users.edit-user'), {user: result});
        }).catch(err => console.log(err.message));
    }

    getViewAdd(req, res){
        res.render(getView('users.add-user'), {typeUser});
    }

    postAdd(req, res){
        res.json(req.body);
    }
}

const userController = new UserController();
module.exports = userController;
