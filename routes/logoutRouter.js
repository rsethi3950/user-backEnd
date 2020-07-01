const mongoose = require('mongoose');
const express = require('express');
//const users = require('../models/routes');
const bodyParser = require('body-parser');
const LogoutRouter = express.Router();

LogoutRouter.get('/', (req,res,err) =>{
    res.end('you have been successfully logged out!!');
});

module.exports= LogoutRouter;