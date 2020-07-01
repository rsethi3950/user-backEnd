const mongoose = require('mongoose');
const express = require('express');
const users = require('../models/user');
const bodyParser = require('body-parser');
//post when you have to save to server.. but here give id and fetch response from db
const LoginRouter = express.Router();

LoginRouter.use(bodyParser.json());

LoginRouter.post('/', (req, res, err) => {
    // if (!req.body.name || !req.body.password || !req.body.email) {
    //     res.json({success: false, msg: 'Please pass name and password and email.'});
    //   } 
    //   else{
    //       res.json(user);
    //   }
    users.findOne({ "email": req.body.email }, (err, user) => {

        //console.log(user);
        if (user) {
            console.log('user found');
            res.json(user);
        }
        else {
            res.json({ success: false, msg: 'unregistered' });
        }
    })
});
module.exports = LoginRouter;