const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next)=>{
    // check login
        if(!req.signedCookies?.tokenId){
            res.redirect("/auth/login");
            return;
        }
        try {
            const dataToken = jwt.verify(req.signedCookies.tokenId, process.env.SECRET_KEY_JWT);
        } catch (error) {
            res.redirect("/auth/login");
            return;
        }
        next();
}

module.exports = authMiddleware;
