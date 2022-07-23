const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getView = (nameView)=>{
    if(/\./.test(nameView)){
      nameView =  nameView.replace('.', '/');
    }
    return 'includes/components/'+nameView;
};

const getLayout = (nameLayout)=>{
  return ({layout: nameLayout});
}

const decodeCookie = (req)=>{
    return jwt.verify(req.signedCookies.tokenId, process.env.SECRET_KEY_JWT);
}

const hashPassword = (pass)=>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
}


module.exports = {getView, getLayout, decodeCookie, hashPassword}
