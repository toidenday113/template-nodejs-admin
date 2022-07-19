const {getView, getLayout} = require('../utils/function-utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/User.model');
class AuthController{
    getLogin(req, res, next){
        res.render(getView('login.login'), getLayout('layout-login'));
    }

    postLogin(req, res, next){
       const {username, password} = req.body;
       userModel.login({username: username}).then(result=>{
            const checkPass = bcrypt.compareSync(password, result.password);
            if(checkPass){
               const createToken  = jwt.sign({id: result.id, username: result.username},
                process.env.SECRET_KEY_JWT,
                {expiresIn: '2h'});
                res.cookie('tokenId', createToken, { signed : true });
                res.redirect('/');
                return;
            }
            res.redirect('auth/login');
       }).catch(err=>console.log(err));
    }

    logout(req, res, next){
        console.log('logout')
        res.clearCookie('tokenId');
        res.redirect('/auth/login');
    }
}

const authController = new AuthController();
module.exports = authController;
