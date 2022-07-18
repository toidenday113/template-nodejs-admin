require('dotenv').config();
const express = require('express');
const path = require('path');
//const ejsHelper = require('ejs-helper');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const titlePage = (req, res, next)=>{
    let strTitle;
    res.locals.title = ()=>{
        return strTitle;
    }

    res.locals.setTitle = (str)=>{
        strTitle = str;
    }
    next();
}


const configUse = (app)=>{
    // Use
    app.use(morgan('combined'));
    app.use(express.static(path.resolve('./server/public')));
    app.use(cookieParser(process.env.SECRET_KEY_COOKIE));
    app.use(express.urlencoded({ extended: true }));
    // app.use(
    // // ejsHelper({
    // //     cssPath: '/css/',
    // //     jsPath: '/js/',
    // // }));
    app.use(titlePage);
}
module.exports = configUse;
