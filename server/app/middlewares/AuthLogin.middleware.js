const jwt = require('jsonwebtoken');
const userModel = require('../models/User.model');
const authLoginMiddleware = (req, res, next)=>{
    // check login 
        if(!req.signedCookies?.tokenId){
            console.log("123");
            next();
            res.status(200);
            return;
        }
        try {
            const dataToken = jwt.verify( req.signedCookies.tokenId, process.env.SECRET_KEY_JWT);
            userModel.login({id: dataToken.id}).then(rs=>{
                if(rs.username === dataToken.username){
                    res.redirect("/");
                }else{
                    next();
                    res.status(200);
                }
            }).catch(err=>console.log(err));
            
        } catch (error) {
            next();
            res.status(200);
        }
       
}
module.exports = authLoginMiddleware;