const getView = (nameView)=>{
    if(/\./.test(nameView)){
      nameView =  nameView.replace('.', '/');
    }
    return 'includes/components/'+nameView;
};

const getLayout = (nameLayout)=>{
  return ({layout: nameLayout});
}


module.exports = {getView, getLayout}