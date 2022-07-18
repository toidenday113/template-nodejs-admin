const path = require('path');
const expressLayout = require('express-ejs-layouts');

const configTemplate = (app)=>{

    app.set('views', path.resolve('./server/resouces/views'));
    app.set('view engine', 'ejs');
    app.set('layout extractMetas', true);;
    app.set('layout extractScripts', true)
    app.set('layout extractStyles', true)
    app.use(expressLayout);
}
module.exports = configTemplate;
