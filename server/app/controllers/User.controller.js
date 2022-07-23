const userModel = require("../models/User.model");
const {getView, hashPassword} = require("../utils/function-utils");
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
        let option = {
            typeUser,
            add_error: false
        }
        if(req.query.add === 'error'){
            option = {
                ...option,
                add_error: true
            }
        }
        res.render(getView('users.add-user'), option);
    }

    postAdd(req, res){
       const dataBody = req.body;
       if(dataBody.avatar !== ""){
           console.log(dataBody.avatar);
           return;
       }
       delete dataBody.confirm_password;
       let password = hashPassword(dataBody.password);
       const data = {
           ...dataBody,
           password
       };
       userModel.insertOne(data).then(result=>{
            if(result.length > 0){
                res.redirect('/user');
                return;
            }
            res.redirect('/user/add?add=error');

       }).catch(() => res.redirect('/user/add?add=error'));
    }
}

const userController = new UserController();
module.exports = userController;
