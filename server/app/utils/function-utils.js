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

const listCategoriesNew =(categories, parentId = 0)=> {
    let categoriesNew = [];
    let parentCategoriesId;
    if (parentId === 0) {
        parentCategoriesId = categories.filter(category => category.parent_id === 0);
    } else {
        parentCategoriesId = categories.filter(category => category.parent_id === parentId);

    }
    for(let data of parentCategoriesId){
        categoriesNew.push({
            id: data.id,
            name: data.name,
            children: listCategoriesNew(categories, data.id)
        })
    };
    return categoriesNew;
}

const menuCategories = (categories, num, strOption="")=>{
    categories.map(category=>{
            if(category === null){
                return strOption;
            }
            strOption += `<option value=${category.id}>${category.name}</option>`;
            if(category.children.length !== 0){
                num++;
               menuCategories(category.children, num);
            }
      });
}

module.exports = {getView, getLayout, decodeCookie, hashPassword, listCategoriesNew, menuCategories}
