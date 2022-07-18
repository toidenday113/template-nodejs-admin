const express = require('express');
const userApiRouter = express.Router();

userApiRouter.get('/', (req, res, next)=>{
    res.send("Api user");
});

module.exports = userApiRouter;
