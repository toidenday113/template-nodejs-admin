const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next)=>{
    // check login

        try {
            if(!req.signedCookies?.tokenId){
                res.redirect("/auth/login");
                return;
            }
            const dataToken = jwt.verify(req.signedCookies.tokenId, process.env.SECRET_KEY_JWT);
        } catch (error) {
            res.redirect("/auth/login?login=error");
            return;
        }
        next();
}

module.exports = authMiddleware;
