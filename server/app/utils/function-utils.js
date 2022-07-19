const jwt = require("jsonwebtoken");

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


module.exports = {getView, getLayout, decodeCookie}
