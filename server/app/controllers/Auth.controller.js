const {getView, getLayout} = require('../utils/function-utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/User.model');
class AuthController{
    getLogin(req, res){
        res.render(getView('login.login'), getLayout('layout-login'));
    };

    postLogin(req, res){
        const username = req.body.username || '';
        const password = req.body.password || '';

        username.replace('\'', ' ');
        username.replace(';', ' ');
        password.replace('\'', ' ');
        password.replace(';', ' ');

        userModel.login({username: username}).then(result=>{
           if(result === undefined){
               res.statusCode = 200;
               res.redirect('back');
               return;
           }
            const checkPass = bcrypt.compareSync(password, result.password);
            if(checkPass){
               const createToken  = jwt.sign({id: result.id, username: result.username},
                process.env.SECRET_KEY_JWT,
                {expiresIn: '2h'});
                res.cookie('tokenId', createToken, { signed : true });
                res.statusCode = 200;
                res.redirect('/');
                return;
            }
            res.statusCode = 200;
            res.redirect('auth/login');
       }).catch(err=>console.log(err));
    };

    logout(req, res){
        console.log('logout')
        res.clearCookie('tokenId');
        res.redirect('/auth/login');
    };
}

const authController = new AuthController();
module.exports = authController;
