const express = require('express');
const configUse = require('./app/config/config-use');
const configTemplate = require('./app/config/config-template');
const initRouter = require('./app/router');
const initApi = require('./app/router/api');
const db = require('./app/config/config-database');

const app = express();
const PORT = process.env.POST || 3000;

// config Use
configUse(app);
// Config template
configTemplate(app);
// Init router
initRouter(app);

// Init router Api [/api/controller/*]
initApi(app);

global.getTable = (name)=>{
  return db(name);
}

db.raw('SELECT 1+1')
  .then(rs => {
    app.listen(PORT, () => {
      console.log(`Server running http://localhost:${PORT}`);
    });
  })
  .catch(err => console.log(`Start server error`));
